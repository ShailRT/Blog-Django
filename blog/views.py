from django.shortcuts import render, redirect
from .models import Blog, Lead, Service

def blog(request, pk):
    if request.method=="POST":
        name = request.POST['name']
        phone = request.POST['phone']
        email = request.POST['email']
        comment = request.POST['comment']
        blog=pk

        lead = Lead.objects.create(name=name, phone=phone, email=email, comment=comment, blog=blog)
        lead.save()

        return redirect('blog', pk=pk)
    else:
        blog = Blog.objects.filter(slug=pk).first()
        category = blog.categories.all()
        author = blog.author
        tags = blog.tags.split(', ')
        context = {
            'blog': blog,
            'category': category,
            'author': author,
            'tags': tags
        }
        return render(request, 'blog.html', context)

def service(request, pk):
    if request.method=="POST":
        name = request.POST['name']
        phone = request.POST['phone']
        email = request.POST['email']
        comment = request.POST['comment']
        blog=pk

        lead = Lead.objects.create(name=name, phone=phone, email=email, comment=comment, blog=blog)
        lead.save()

        return redirect('blog', pk=pk)
    else:
        service = Service.objects.filter(slug=pk).first()
        category = service.categories.all()
        author = service.author
        tags = service.tags.split(', ')
        context = {
            'service': service,
            'category': category,
            'author': author,
            'tags': tags
        }
        return render(request, 'service.html', context)
    

