from django.db import models

INTEGER_FIELDS = ("end_year", "intensity", "start_year",
                  "impact", "relevance", "likelihood")

DATETIME_FIELDS = ("added", "published")

CHAR_FIELDS = ("sector", "topic", "region", "country", "pestle", "source")

REMAINING_FIELDS = ("insight", "url", "title")

ALL_FIELDS = (*INTEGER_FIELDS, *DATETIME_FIELDS,
              *CHAR_FIELDS, *REMAINING_FIELDS)


FILTER_FIELDS = ["end_year", *CHAR_FIELDS]


class Article(models.Model):
    end_year = models.IntegerField(null=True)
    intensity = models.IntegerField(null=True)
    sector = models.CharField(max_length=100)
    topic = models.CharField(max_length=100)
    insight = models.TextField()
    url = models.URLField(max_length=500)
    region = models.CharField(max_length=100)
    start_year = models.IntegerField(null=True)
    impact = models.IntegerField(null=True)
    added = models.DateTimeField(null=True)
    published = models.DateTimeField(null=True)
    country = models.CharField(max_length=100)
    relevance = models.IntegerField(null=True)
    pestle = models.CharField(max_length=100)
    source = models.CharField(max_length=128)
    title = models.TextField()
    likelihood = models.IntegerField(null=True)
