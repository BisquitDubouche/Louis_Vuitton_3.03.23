from django.contrib import admin
from .models import Like, Rating 
from ..feedback.models import Favorite

admin.site.register(Like)
admin.site.register(Rating)
admin.site.register(Favorite)