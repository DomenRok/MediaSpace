from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

#from ..users.models import CustomUser
# Create your models here.


class Genre(models.Model):
    name = models.CharField(max_length=150)


#class Rating(models.Model):
#    comment = models.CharField(blank=True, max_length=150)
#    rating = models.IntegerField(
#        validators=[MaxValueValidator(5), MinValueValidator(1)]
#    )


class Movie(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=150)
    link = models.URLField()
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, blank=True, null=True)

