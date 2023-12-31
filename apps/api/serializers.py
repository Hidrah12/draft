from rest_framework import serializers
from apps.core.models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['title', 'description', 'important', 'done']
