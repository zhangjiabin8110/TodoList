from django.shortcuts import render
#from rest_framework import mixins
from .Serializer import TodoSerializer
from django.http import HttpResponse
from rest_framework.pagination import PageNumberPagination
#from django_filters.rest_framework import DjangoFilterBackend
#from rest_framework import filters
#from .filter import TodoFilter
from rest_framework import viewsets
from .models import TodoList
import json
from django.core.serializers.json import DjangoJSONEncoder


#Create your views here.
class TodoPagination(PageNumberPagination):

    #分页
    page_size_query_param = "page_size"
    page_query_param = "page"
    page_size = 2
    max_page_size = 100


class TodosListViewSet(viewsets.ModelViewSet):
    queryset = TodoList.objects.all()
    serializer_class = TodoSerializer

    serializer_class = TodoSerializer
    pagination_class = TodoPagination

    def get(self, request,format=None):
        todo_serializer = TodoList.objects.all()
        query_serializer = TodoSerializer(todo_serializer,many=True)
        return HttpResponse(json.dumps(query_serializer.data,cls=DjangoJSONEncoder),content_type='application/json')

    def post(self, request,format=None):
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse(json.dumps(serializer.data),content_type='application/json')
        return HttpResponse(json.dumps(serializer.errors),content_type='application/json')

    # def delete(self,request,id):
    #     TodoList.objects.filter(pk=id).delete()
    #     return HttpResponse()

    # def myview(_request):
    #     todo_serializer = TodoList.objects.all()
    #     query_serializer = TodoSerializer(todo_serializer, many=True)
    #     response = HttpResponse(json.dumps(query_serializer.data))
    #     response["Access-Control-Allow-Origin"] = "*"
    #     response["Access-Control-Allow-Method"] = "POST, GET, PUT,DELETE,OPTIONS"
    #     return response



    # def get(self, request, *args, **kwargs):
    #     return self.retrieve(request, *args, **kwargs)
    #
    # def put(self, request, *args, **kwargs):
    #     return self.update(request, *args, **kwargs)
    #
    # def delete(self, request, *args, **kwargs):
    #     return self.destroy(request, *args, **kwargs)

