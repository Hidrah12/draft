from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    def __str__(self):
        return f'{self.pk}, {self.username}'


class Category(models.Model):
    name = models.CharField(max_length=200)
    create_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.pk}, {self.name}'


class Task(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    categories = models.ManyToManyField(Category)
    important = models.BooleanField(default=False)
    done = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)
    modified_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.pk}, {self.title}'
