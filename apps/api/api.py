from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from apps.core.models import Task
from .serializers import TaskSerializer


@api_view(['GET', 'POST'])
def task_api_view(request):
    if request.method == 'GET':
        tasks = Task.objects.filter(done=True)
        if tasks.exists():
            task_serializer = TaskSerializer(tasks, many=True)
            return Response(task_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({'msg': 'No hay ninguna tarea completa.'}, status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'POST':
        task_serializer = TaskSerializer(data=request.POST)
        if task_serializer.is_valid():
            Task.objects.create(
                user=request.user.username,
                title=request.POST['title'],
                description=request.POST['description'],
                tag=request.POST['tags'],
            )
            return Response(task_serializer.data, status=status.HTTP_200_OK)
        return Response(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_task_api_view(request, id):
    if request.method == 'PUT':
        task = Task.objects.filter(id=id).first()
        if task:
            task.done = request.data['done']
            task.save()
            return Response({'msg': 'The task has been completed'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'msg': 'Task does not exist'}, status=status.HTTP_404_NOT_FOUND)
