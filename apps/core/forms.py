from django import forms
from .models import Task


class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['title', 'description', 'tags', 'important']

    def __init__(self, *args, **kwargs):
        super(TaskForm, self).__init__(*args, **kwargs)
        self.fields['title'].widget.attrs.update({
            'placeholder': 'Task name here...'
        })
        self.fields['description'].widget.attrs.update({
            'placeholder': 'Description'
        })
        self.fields['tags'].help_text = '*Add your tag'
        self.fields['tags'].widget.attrs.update({
            'title': 'Select a label'
        })
