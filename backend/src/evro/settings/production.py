from .base import *
import os
# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY_PROD', 'SECRET_KEY_PROD')

DB_PROD_NAME = os.environ.get('DB_PROD_NAME')
DB_PROD_USER = os.environ.get('DB_PROD_PASS')
DB_PROD_PASS = os.environ.get('DB_PROD_PASS')


# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'HOST': 'localhost',
        'POST': '5432',
        'NAME': os.environ.get('DB_NAME', DB_PROD_NAME),
        'USER': os.environ.get('DB_USER', DB_PROD_USER),
        'PASSWORD': os.environ.get('DB_PASS', DB_PROD_PASS),
    }
}

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = [
    "localhost",
    "0.0.0.0",
    "127.0.0.1",
]
MEDIA_URL = '/media/'
# TEMPLATES
# ------------------------------------------------------------------------------
# https://docs.djangoproject.com/en/dev/ref/settings/#templates
TEMPLATES[0]['OPTIONS']['debug'] = DEBUG  # noqa F405

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


try:
    from .local import *
except ImportError:
    pass
