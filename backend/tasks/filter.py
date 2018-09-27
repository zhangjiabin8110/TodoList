import django_filters
from django.db.models import Q
from .models import TodoList


class TodoFilter(django_filters.rest_framework.FilterSet):
    class Meta:
        model = TodoList
        fields =['id','name','status']