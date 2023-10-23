from django.db import models
from django.utils.timezone import now
from realtors.models import Realtor

class Listing(models.Model):
    class SaleType(models.TextChoices):
        FOR_SALE = 'For Sale'
        FOR_RENT = 'For Rent'
    
    class HomeType(models.TextChoices):
        HOUSE = 'House'
        APARTMENT = 'Appartment'
        STUDIO = 'Studio'
        VILLA = "Villa"
        LAND = "Land"
    realtor = models.ForeignKey(Realtor, on_delete=models.DO_NOTHING)
    slug = models.CharField(max_length=200, unique=True)
    title = models.CharField(max_length=150)
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    # zipcode = models.CharField(max_length=15)
    description = models.TextField(blank=True)
    sale_type = models.CharField(max_length=50, choices=SaleType.choices, default=SaleType.FOR_SALE)
    price = models.IntegerField()
    # bedrooms = models.IntegerField()
    # bathrooms = models.DecimalField(max_digits=2, decimal_places=1)
    home_type = models.CharField(max_length=50, choices=HomeType.choices, default=HomeType.HOUSE)
    # sqft = models.IntegerField()
    # open_house = models.BooleanField(default=False)
    photo_main =models.CharField(max_length=700)
    
    photo_1 = models.CharField(max_length=700,blank=True)
    photo_2 = models.CharField(max_length=700,blank=True)
    photo_3 = models.CharField(max_length=700,blank=True)
    photo_4 = models.CharField(max_length=700,blank=True)
    # photo_5 = models.CharField(max_length=400,blank=True)
    # photo_6 = models.CharField(max_length=400,blank=True)
    # photo_7 = models.CharField(max_length=400,blank=True)
    # photo_8 = models.CharField(max_length=400,blank=True)
    # photo_9 = models.CharField(max_length=400,blank=True)
    # photo_10 = models.CharField(max_length=400,blank=True)
    # photo_11 = models.CharField(max_length=400,blank=True)
    # photo_12 = models.CharField(max_length=400,blank=True)
    # photo_13 = models.CharField(max_length=400,blank=True)
    # photo_14 = models.CharField(max_length=400,blank=True)
    # photo_15 = models.CharField(max_length=400,blank=True)
    # photo_16 = models.CharField(max_length=400,blank=True)
    # photo_17 = models.CharField(max_length=400,blank=True)
    # photo_18 = models.CharField(max_length=400,blank=True)
    # photo_19 = models.CharField(max_length=400,blank=True)
    # photo_20 = models.CharField(max_length=400,blank=True)
    # is_published = models.BooleanField(default=True, blank=True)
    list_date = models.DateTimeField(blank=True)

    def __str__(self):
        return self.title
