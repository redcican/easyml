# Generated by Django 3.2.12 on 2022-02-06 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_remove_file_file_url'),
    ]

    operations = [
        migrations.CreateModel(
            name='FileMetadata',
            fields=[
                ('file_metadata_id', models.AutoField(primary_key=True, serialize=False)),
                ('column_name', models.CharField(max_length=200, null=True)),
                ('data_type', models.CharField(max_length=200, null=True)),
                ('is_category', models.BooleanField(null=True)),
                ('describe', models.JSONField(null=True)),
            ],
        ),
    ]
