# Generated by Django 4.1.7 on 2023-02-18 04:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school', models.CharField(max_length=255)),
                ('degree', models.CharField(max_length=255)),
                ('years', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('ordinal', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='uploads/')),
                ('url', models.URLField()),
                ('ordinal', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=255)),
                ('years', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('ordinal', models.IntegerField()),
            ],
        ),
    ]
