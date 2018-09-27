from django.contrib import admin
from .models import TodoList

# Register your models here.


class TodoAdmin(admin.ModelAdmin):
    list_display = ('id','name','status')

admin.site.register(TodoList,TodoAdmin)