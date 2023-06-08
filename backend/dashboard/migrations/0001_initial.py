# Generated by Django 4.2.1 on 2023-06-03 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DashboardItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('end_year', models.IntegerField(null=True)),
                ('intensity', models.IntegerField(null=True)),
                ('sector', models.CharField(max_length=100)),
                ('topic', models.CharField(max_length=100)),
                ('insight', models.TextField()),
                ('url', models.URLField(max_length=500)),
                ('region', models.CharField(max_length=100)),
                ('start_year', models.IntegerField(null=True)),
                ('impact', models.IntegerField(null=True)),
                ('added', models.DateTimeField(null=True)),
                ('published', models.DateTimeField(null=True)),
                ('country', models.CharField(max_length=100)),
                ('relevance', models.IntegerField(null=True)),
                ('pestle', models.CharField(max_length=100)),
                ('source', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=1024)),
                ('likelihood', models.IntegerField(null=True)),
            ],
        ),
    ]