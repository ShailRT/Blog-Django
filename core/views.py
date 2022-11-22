from django.shortcuts import render, redirect
from blog.models import Blog, Lead, Service
from django.db.models import Q

def index(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        comment = request.POST['comment']

        lead = Lead.objects.create(name=name, email=email, comment=comment, blog="index")
        lead.save()
        return redirect('/'+'#contactSection')

    else:
        blog_list = Blog.objects.all()[:4]
        context = {
            'blog_list': blog_list
        }
        return render(request, 'index.html', context)

def blog_list(request):
    query = request.GET.get('query', '')
    blogs = Blog.objects.filter(Q(title__icontains=query))
    context = {
        'blog_list': blogs,
        'query': query,
    }
    return render(request, 'blog-list.html', context)

def service_list(request):
    query = request.GET.get('query', '')
    service_list = Service.objects.filter(Q(title__icontains=query))
    context = {
        'service_list': service_list,
        'query': query,
    }
    return render(request, 'service-list.html', context)

