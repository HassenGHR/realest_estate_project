from django.contrib import admin
from .models import Realtor
# from .forms import RealtorAdminForm

class RealtorAdmin(admin.ModelAdmin):
    # form = RealtorAdminForm
    list_display = ('id', 'name', 'facebook_profile', 'date_hired')
    list_display_links = ('id', 'name')
    search_fields = ('name', )
    list_per_page = 25

admin.site.register(Realtor, RealtorAdmin)


