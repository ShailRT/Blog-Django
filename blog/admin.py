from django.contrib import admin
from .models import Blog, Category, Lead, Author, Service

admin.site.register(Blog)
admin.site.register(Category)
admin.site.register(Lead)
admin.site.register(Author)
admin.site.register(Service)
