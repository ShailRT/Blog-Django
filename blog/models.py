from django.db import models
from ckeditor.fields import RichTextField 

class Author(models.Model):
    name = models.CharField(max_length=120)
    image = models.ImageField(upload_to='author')
    intro = models.TextField()
    twitter = models.CharField(max_length=250, blank=True, null=True)
    instagram = models.CharField(max_length=250, blank=True, null=True)
    instagram = models.CharField(max_length=250, blank=True, null=True)
    youtube = models.CharField(max_length=250, blank=True, null=True)

    def __str__(self):
        return self.name

class Category(models.Model):
    title = models.CharField(max_length=120)
    def __str__(self):
        return self.title
        
class Blog(models.Model):
    title = models.CharField(max_length=120)
    intro = models.TextField(blank=True, null=True)
    slug = models.SlugField()
    categories = models.ManyToManyField(Category)
    tags = models.TextField(blank=True, null=True)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='blog')
    body = RichTextField(blank=True, null=True)
    date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

class Lead(models.Model):
    name = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    phone = models.CharField(max_length=120, null=True, blank=True)
    comment = models.TextField(blank=True, null=True)
    blog = models.CharField(max_length=120)

    def __str__(self):
        return self.email



