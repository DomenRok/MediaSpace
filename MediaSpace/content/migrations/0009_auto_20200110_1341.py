# Generated by Django 3.0 on 2020-01-10 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0008_auto_20200110_1159'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='imdb_id',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]