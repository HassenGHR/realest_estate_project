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
    photo_main =models.CharField(max_length=700, default="https://www.bing.com/images/search?view=detailV2&ccid=34GJR%2Bsf&id=9781308412EDFCA4C0FF9949BB099043B0482C7B&thid=OIP.34GJR-sfy-w2ZH3F2y73ZgHaFj&mediaurl=https%3A%2F%2Flh5.googleusercontent.com%2Fproxy%2FlPHSi635MQ9RMqsopzFyuVtrFNPJg2g-QliZD3NYL_BEWXi-3NYjdSz0xHhEY-vKjaUZSPrLuun5S3jVx9uySRx0sL5GQBUVKfmI6cj6dwV7ZipIcmOydXfD-y9aImb3x5q8TOoE%3Ds0-d&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.df818947eb1fcbec36647dc5db2ef766%3Frik%3DeyxIsEOQCbtJmQ%26pid%3DImgRaw%26r%3D0&exph=768&expw=1024&q=listing+house+default+image&simid=607988535876080080&form=IRPRST&ck=AD25D46407C506342AA383CB94B60C99&selectedindex=19&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_5IByvVnd*cp_BF02C52B2A3263A8E0861A1287972F95*mid_A4E47D970C3064EF5BE55DF4C06D70B805C4DC28*simid_7084763138129*thid_OIF.vwLFKyoyY6jghhoSh5cvlQ&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0")
    
    photo_1 = models.CharField(max_length=700,blank=True, default="https://www.bing.com/images/search?view=detailV2&ccid=34GJR%2Bsf&id=9781308412EDFCA4C0FF9949BB099043B0482C7B&thid=OIP.34GJR-sfy-w2ZH3F2y73ZgHaFj&mediaurl=https%3A%2F%2Flh5.googleusercontent.com%2Fproxy%2FlPHSi635MQ9RMqsopzFyuVtrFNPJg2g-QliZD3NYL_BEWXi-3NYjdSz0xHhEY-vKjaUZSPrLuun5S3jVx9uySRx0sL5GQBUVKfmI6cj6dwV7ZipIcmOydXfD-y9aImb3x5q8TOoE%3Ds0-d&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.df818947eb1fcbec36647dc5db2ef766%3Frik%3DeyxIsEOQCbtJmQ%26pid%3DImgRaw%26r%3D0&exph=768&expw=1024&q=listing+house+default+image&simid=607988535876080080&form=IRPRST&ck=AD25D46407C506342AA383CB94B60C99&selectedindex=19&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_5IByvVnd*cp_BF02C52B2A3263A8E0861A1287972F95*mid_A4E47D970C3064EF5BE55DF4C06D70B805C4DC28*simid_7084763138129*thid_OIF.vwLFKyoyY6jghhoSh5cvlQ&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0")
    photo_2 = models.CharField(max_length=700,blank=True, default="https://www.bing.com/images/search?view=detailV2&ccid=34GJR%2Bsf&id=9781308412EDFCA4C0FF9949BB099043B0482C7B&thid=OIP.34GJR-sfy-w2ZH3F2y73ZgHaFj&mediaurl=https%3A%2F%2Flh5.googleusercontent.com%2Fproxy%2FlPHSi635MQ9RMqsopzFyuVtrFNPJg2g-QliZD3NYL_BEWXi-3NYjdSz0xHhEY-vKjaUZSPrLuun5S3jVx9uySRx0sL5GQBUVKfmI6cj6dwV7ZipIcmOydXfD-y9aImb3x5q8TOoE%3Ds0-d&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.df818947eb1fcbec36647dc5db2ef766%3Frik%3DeyxIsEOQCbtJmQ%26pid%3DImgRaw%26r%3D0&exph=768&expw=1024&q=listing+house+default+image&simid=607988535876080080&form=IRPRST&ck=AD25D46407C506342AA383CB94B60C99&selectedindex=19&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_5IByvVnd*cp_BF02C52B2A3263A8E0861A1287972F95*mid_A4E47D970C3064EF5BE55DF4C06D70B805C4DC28*simid_7084763138129*thid_OIF.vwLFKyoyY6jghhoSh5cvlQ&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0")
    photo_3 = models.CharField(max_length=700,blank=True, default="https://www.bing.com/images/search?view=detailV2&ccid=34GJR%2Bsf&id=9781308412EDFCA4C0FF9949BB099043B0482C7B&thid=OIP.34GJR-sfy-w2ZH3F2y73ZgHaFj&mediaurl=https%3A%2F%2Flh5.googleusercontent.com%2Fproxy%2FlPHSi635MQ9RMqsopzFyuVtrFNPJg2g-QliZD3NYL_BEWXi-3NYjdSz0xHhEY-vKjaUZSPrLuun5S3jVx9uySRx0sL5GQBUVKfmI6cj6dwV7ZipIcmOydXfD-y9aImb3x5q8TOoE%3Ds0-d&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.df818947eb1fcbec36647dc5db2ef766%3Frik%3DeyxIsEOQCbtJmQ%26pid%3DImgRaw%26r%3D0&exph=768&expw=1024&q=listing+house+default+image&simid=607988535876080080&form=IRPRST&ck=AD25D46407C506342AA383CB94B60C99&selectedindex=19&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_5IByvVnd*cp_BF02C52B2A3263A8E0861A1287972F95*mid_A4E47D970C3064EF5BE55DF4C06D70B805C4DC28*simid_7084763138129*thid_OIF.vwLFKyoyY6jghhoSh5cvlQ&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0")
    photo_4 = models.CharField(max_length=700,blank=True, default="https://www.bing.com/images/search?view=detailV2&ccid=34GJR%2Bsf&id=9781308412EDFCA4C0FF9949BB099043B0482C7B&thid=OIP.34GJR-sfy-w2ZH3F2y73ZgHaFj&mediaurl=https%3A%2F%2Flh5.googleusercontent.com%2Fproxy%2FlPHSi635MQ9RMqsopzFyuVtrFNPJg2g-QliZD3NYL_BEWXi-3NYjdSz0xHhEY-vKjaUZSPrLuun5S3jVx9uySRx0sL5GQBUVKfmI6cj6dwV7ZipIcmOydXfD-y9aImb3x5q8TOoE%3Ds0-d&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.df818947eb1fcbec36647dc5db2ef766%3Frik%3DeyxIsEOQCbtJmQ%26pid%3DImgRaw%26r%3D0&exph=768&expw=1024&q=listing+house+default+image&simid=607988535876080080&form=IRPRST&ck=AD25D46407C506342AA383CB94B60C99&selectedindex=19&itb=0&ajaxhist=0&ajaxserp=0&pivotparams=insightsToken%3Dccid_5IByvVnd*cp_BF02C52B2A3263A8E0861A1287972F95*mid_A4E47D970C3064EF5BE55DF4C06D70B805C4DC28*simid_7084763138129*thid_OIF.vwLFKyoyY6jghhoSh5cvlQ&vt=0&sim=11&iss=VSI&ajaxhist=0&ajaxserp=0")

    list_date = models.DateTimeField(blank=True)

    def __str__(self):
        return self.title
