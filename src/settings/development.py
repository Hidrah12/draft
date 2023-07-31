import os
from .base import *

DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'draft_db',
        'USER': 'root',
        'PASSWORD': 'Da6879niel##_#¡',
        'HOST': '',
        'PORT': ''
    }
}

STATIC_URL = 'static/'
STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static'), )
