# Generated by Django 4.2.5 on 2023-09-13 12:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0005_alter_listing_home_type_alter_listing_sale_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='home_type',
            field=models.CharField(choices=[('House', 'House'), ('Appartment', 'Apartment'), ('Studio', 'Studio')], default='House', max_length=50),
        ),
    ]