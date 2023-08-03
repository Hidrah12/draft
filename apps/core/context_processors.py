from .models import Task


def get_data(request):
    tasks = Task.objects.all().order_by('-id')
    tasks_done = Task.objects.filter(done=True)
    return {'tasks_done': tasks_done, 'tasks': tasks}
