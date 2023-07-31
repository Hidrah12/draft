import os
from dotenv import load_dotenv
from django.core.wsgi import get_wsgi_application

load_dotenv()
if os.environ.get('DJANGO_ENV') == 'production':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'src.settings.production')
else:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'src.settings.development')

application = get_wsgi_application()
