from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission


class CustomerUser(AbstractUser):
    groups = models.ManyToManyField(
        Group,
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_name='customuser_set'  # Puedes cambiar el nombre a tu preferencia
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='customuser_set'  # Puedes cambiar el nombre a tu preferencia
    )

    def __str__(self):
        return f'{self.pk}, {self.username}'

    class Meta:
        verbose_name = 'personalización de usuario'
        verbose_name_plural = 'personalización de usuarios'


class Category(models.Model):
    name = models.CharField(max_length=200)
    create_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.pk}, {self.name}'

    class Meta:
        verbose_name = 'categoría'
        verbose_name_plural = 'categorías'


class Task(models.Model):
    user = models.ForeignKey(CustomerUser, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    description = models.TextField()
    categories = models.ManyToManyField(Category)
    important = models.BooleanField(default=False)
    done = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)
    modified_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.pk}, {self.title}'

    class Meta:
        verbose_name = 'tarea'
        verbose_name_plural = 'tareas'
