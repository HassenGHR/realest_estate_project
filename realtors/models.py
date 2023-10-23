from django.db import models
from datetime import datetime


class Realtor(models.Model):
    name = models.CharField(max_length=50)
    photo = models.CharField(max_length=700, blank=True, default='https://i.stack.imgur.com/l60Hf.png')  
    description = models.TextField(blank=True)
    phone = models.CharField(max_length=100)
    facebook_profile = models.CharField(max_length=300)
    top_seller = models.BooleanField(default=False)
    date_hired = models.DateTimeField(blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # Check if the photo field is empty and set the default URL if it is
        if not self.photo:
            self.photo = 'https://i.stack.imgur.com/l60Hf.png'  # Set the default URL
        super().save(*args, **kwargs)
