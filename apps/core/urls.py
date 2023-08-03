from django.urls import path
from .views import index, delete_task

app_name = 'core'
urlpatterns = [
    path('', index, name='index-url'),
    path('task/<int:id>/', delete_task, name='delete-task-url'),
]
