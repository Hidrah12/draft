from django.urls import path
from .api import task_api_view, update_task_api_view

app_name = 'api'
urlpatterns = [
    path('tasks/', task_api_view, name='create-api-url'),
    path('task/update/<int:id>/', update_task_api_view, name='update-api-url'),
]
