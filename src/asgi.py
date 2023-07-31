import os
from dotenv import load_dotenv
from django.core.asgi import get_asgi_application

load_dotenv()
if os.environ.get('DJANGO_ENV') == 'production':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'src.settings.production')
else:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'src.settings.development')

application = get_asgi_application()
