from django.shortcuts import render
from blog.models import Blog

def index(request):
    blog_list = Blog.objects.all()[:4]
    context = {
        'blog_list': blog_list
    }
    return render(request, 'index.html', context)

