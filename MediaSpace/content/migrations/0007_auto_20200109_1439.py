# Generated by Django 3.0 on 2020-01-09 13:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0006_auto_20200109_1439'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='link',
            field=models.URLField(blank=True, null=True),
        ),
    ]