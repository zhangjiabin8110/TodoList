from django.db import models
from django.contrib.auth.models import User
#from django.conf import settings


# class ListForm(models.Model):
#     id = models.IntegerField(default=0)
#     name = models.CharField(max_length=1000)
#     status = models.BooleanField(default=0)


class TodoList(models.Model):
    #user = models.ForeignKey(default=1, blank=True)

    id = models.IntegerField(default=0,primary_key=True)
    name = models.CharField(max_length=1000)
    status = models.BooleanField(default=0)
    #listFrom = models.ForeignKey(listFrom,related_name='todo')
    #listForm = models.ForeignKey(ListForm)
    #finished = models.IntegerField(default=0)

    def __unicode__(self):
        return self.id




