from django.urls import path 
from . import views 

urlpatterns = [
    path('', views.index, name='index'),
    path('blog-list/', views.blog_list, name='blog-list'),
]
