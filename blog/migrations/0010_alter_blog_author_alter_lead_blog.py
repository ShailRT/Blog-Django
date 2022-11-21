# Generated by Django 4.1.3 on 2022-11-18 17:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_lead_blog'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.author'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='blog',
            field=models.CharField(max_length=120),
        ),
    ]
