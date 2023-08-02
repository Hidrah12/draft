from django.urls import path
from .api import task_api_view

app_name = 'api'
urlpatterns = [
    path('tasks/', task_api_view, name='create-api-url'),
]
