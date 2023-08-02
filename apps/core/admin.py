from django.contrib import admin
from .models import Task, Tag


class TaskAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'done', 'created_on', 'modified_on']


class TagAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'create_on']


admin.site.register(Task, TaskAdmin)
admin.site.register(Tag, TagAdmin)
