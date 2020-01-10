from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from users.models import CustomUser
# Create your models here.


class Genre(models.Model):
    name = models.CharField(max_length=150)

    def __str__(self):
        return f"{self.name}"


class Movie(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=150, null=True, blank=True)
    link = models.URLField(null=True, blank=True)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, blank=True, null=True)
    users = models.ManyToManyField(CustomUser, through='Rating')
    imdb_id = models.IntegerField(unique=True, blank=True, null=True)
    thumbnail_url = models.URLField(blank=True, null=True)


class Rating(models.Model):
    comment = models.CharField(blank=True, max_length=150)
    rating = models.IntegerField(
        validators=[MaxValueValidator(5), MinValueValidator(1)]
    )

    person = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    date_rated = models.DateTimeField(blank=True)
