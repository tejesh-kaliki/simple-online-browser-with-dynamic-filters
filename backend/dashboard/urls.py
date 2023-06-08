from django.urls import path, re_path

from . import views

urlpatterns = [
    path("import-data", views.import_data),
    path("api/articles", views.get_articles),
    path("api/filters", views.get_filters),
]
