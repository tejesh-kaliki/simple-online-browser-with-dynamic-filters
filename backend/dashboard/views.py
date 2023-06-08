from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

import json
from datetime import datetime

from .serializers import ArticleSerializer
from .models import *


def parse_datetime(datetime_str: str) -> str:
    date = datetime.strptime(datetime_str, r"%B, %d %Y %H:%M:%S")
    return date.strftime(r"%Y-%m-%d %H:%M:%S")


def parse_filters(filters: dict):
    new_filters = dict()
    for key in filters:
        if key in CHAR_FIELDS:
            new_filters[key+"__in"] = filters[key].split(",")
        elif key in INTEGER_FIELDS:
            new_filters[key+"__in"] = list(map(int, filters[key].split(",")))
    return new_filters


def import_data(request):
    with open('static/json/jsondata.json', encoding="utf-8") as json_file:
        json_data = json.load(json_file)

    # Iterate over the JSON list and create model instances
    for item in json_data:
        for field in INTEGER_FIELDS:
            if item[field] == '':
                item[field] = None
        for field in DATETIME_FIELDS:
            if item[field] == '':
                item[field] = None
            else:
                item[field] = parse_datetime(item[field])
        item = Article(**item)
        item.save()

    print(json_data)

    return HttpResponse("Data imported successfully.")


@api_view(['GET'])
def get_articles(request):
    params = parse_filters(request.GET.dict())
    data = Article.objects.filter(**params)
    serializer = ArticleSerializer(
        data, context={'request': request}, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_filters(request):
    data = dict()
    for field in FILTER_FIELDS:
        resultset = Article.objects.raw(
            f"SELECT id, {field} FROM dashboard_article GROUP BY {field}")
        values = list(map(lambda article: getattr(
            article, field), resultset.iterator()))
        if field in CHAR_FIELDS:
            values = list(map(str.capitalize, values))
        if None in values:
            values.remove(None)
        if "" in values:
            values.remove("")
        values.sort()
        data[field] = values
    return JsonResponse(data=data)
