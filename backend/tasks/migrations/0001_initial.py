# Generated by Django 2.1.1 on 2018-09-26 08:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TodoList',
            fields=[
                ('id', models.IntegerField(default=0, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=1000)),
                ('status', models.BooleanField(default=0)),
            ],
        ),
    ]