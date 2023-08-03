from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from .forms import TaskForm
from .models import Task, UserApp


def index_view(request):
    if request.method == 'POST':
        task_form = TaskForm(request.POST)
        if task_form.is_valid():
            if 'important' in request.POST.keys():
                checked = True
            else:
                checked = False
            task = Task.objects.create(
                user=request.user,
                title=request.POST['title'],
                description=request.POST['description'],
                important=checked
            )
            task.save()
            for pk in request.POST.getlist('tags'):
                tag = Tag.objects.get(id=pk)
                task.tags.add(tag)
            task.save()
        return redirect('core:index-url')
    else:
        task_form = TaskForm()
    return render(request, 'core/index.html', {'task_form': task_form})


def delete_task_view(request, id):
    task = Task.objects.filter(id=id).first()
    if task:
        task.delete()
    return redirect('core:index-url')
