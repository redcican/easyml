# Generated by Django 3.1.1 on 2022-02-13 20:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0014_predict_experiment_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='predict',
            name='datasource_id',
        ),
        migrations.AddField(
            model_name='predict',
            name='file',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='main.file'),
        ),
    ]
