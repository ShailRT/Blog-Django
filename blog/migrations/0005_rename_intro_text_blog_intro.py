# Generated by Django 4.1.3 on 2022-11-17 12:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_blog_intro_text'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='intro_text',
            new_name='intro',
        ),
    ]
