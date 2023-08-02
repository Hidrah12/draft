from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from .forms import TaskForm
from .models import Task


def index(request):
    if request.method == 'POST':
        task_form = TaskForm(request.POST)
        if task_form.is_valid():
            if 'important' in request.POST.keys():
                checked = True
            else:
                checked = False
            get_user = CustomerUser.objects.get(username=request.user.username)
            new_task = Task(
                user=get_user,
                title=request.POST['title'],
                description=request.POST['description'],
                important=checked,
            )
            new_task.save()
            for i in request.POST['tags']:
                tag = Tag.objects.get(id=i)
                print(tag)
                new_task.tags.add(tag)
            return redirect('core:index')
    else:
        task_form = TaskForm()
        tasks = Task.objects.all().order_by('-id')

    return render(request, 'core/index.html', {'task_form': task_form, 'tasks': tasks})
