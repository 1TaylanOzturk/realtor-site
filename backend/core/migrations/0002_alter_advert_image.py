# Generated by Django 4.0.6 on 2022-07-10 10:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='advert',
            name='image',
            field=models.ImageField(blank=True, default='photo', null=True, upload_to='adverts', verbose_name='image'),
        ),
    ]