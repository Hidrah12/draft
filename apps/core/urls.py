from django.urls import path
from .views import index_view, delete_task_view

app_name = 'core'
urlpatterns = [
    path('', index_view, name='index-url'),
    path('task/<int:id>/', delete_task_view, name='delete-task-url'),
]
