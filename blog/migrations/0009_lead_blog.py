# Generated by Django 4.1.3 on 2022-11-18 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_remove_blog_author_blog_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='blog',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
    ]
