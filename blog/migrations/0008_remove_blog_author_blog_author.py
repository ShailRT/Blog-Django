# Generated by Django 4.1.3 on 2022-11-18 16:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_author_remove_blog_author_blog_author'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='author',
        ),
        migrations.AddField(
            model_name='blog',
            name='author',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='blog.author'),
        ),
    ]
