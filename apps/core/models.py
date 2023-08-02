from django.db import models
from django.contrib.auth.models import AbstractUser


class UserApp(AbstractUser):
    pass


class Tag(models.Model):
    name = models.CharField(max_length=200)
    create_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'etiqueta'
        verbose_name_plural = 'etiquetas'


class Task(models.Model):
    user = models.ForeignKey(UserApp, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    tags = models.ManyToManyField(Tag)
    important = models.BooleanField(default=False)
    done = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)
    modified_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name = 'tarea'
        verbose_name_plural = 'tareas'
