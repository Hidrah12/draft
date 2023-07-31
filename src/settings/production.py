import os
from .base import *

DEBUG = False

ALLOWED_HOSTS = ['*']

MIDDLEWARE += ['whitenoise.middleware.WhiteNoiseMiddleware']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
    }
}

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static'), )
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
