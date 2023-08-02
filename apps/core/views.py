from django.shortcuts import render, redirect
from .models import *
from .forms import TaskForm
from .models import Task


def index(request):
    if request.method == 'POST':
        task_form = TaskForm(requet.POST)
        if task_form.is_valid():
            Task.objects.create(
                user=request.user.username,
                title=request.POST['title'],
                description=request.POST['description'],
                tag=request.POST['tags'],
                important=request.POST['important']
            )
            return redirect('core:index')
    else:
        task_form = TaskForm()
    return render(request, 'core/index.html', {'task_form': task_form})
