from django.apps import AppConfig


class UserConfig(AppConfig):
    name = 'user'

class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = "apps.accounts"