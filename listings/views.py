from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Listing
from .serializers import ListingSerializer, listingDetailSerializer
from datetime import datetime, timezone, timedelta

class ListingsView(ListAPIView):
    queryset = Listing.objects.order_by('-list_date')
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    lookup_field = 'slug'

class ListingView(RetrieveAPIView):
    queryset = Listing.objects.order_by('-list_date')
    serializer_class = listingDetailSerializer
    lookup_field = 'slug'

class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer

    def post(self, request, format=None):
        queryset = Listing.objects.order_by('-list_date')
        data = self.request.data

        sale_type = data['sale_type']
        queryset = queryset.filter(sale_type__iexact=sale_type)

        price = data['price']
        if price == 'da 0+':
            price = 0
        elif price == 'da 5,000+':
            price = 5000
        elif price == 'da 15,000+':
            price = 15000
        elif price == 'da 20,000+':
            price = 20000
        elif price == 'da 25,000+':
            price = 25000
        elif price == 'da 30,000+':
            price = 30000
        elif price == 'da 50,000+':
            price = 50000
        elif price == 'da 100,000+':
            price = 100000
        elif price == 'Any':
            price = -1
        
        if price != -1:
            queryset = queryset.filter(price__gte=price)
        


        home_type = data['home_type']
        queryset = queryset.filter(home_type__iexact=home_type)

        
        days_passed = data['days_listed']
        if days_passed == '1 or less':
            days_passed = 1
        elif days_passed == '2 or less':
            days_passed = 2
        elif days_passed == '5 or less':
            days_passed = 5
        elif days_passed == '10 or less':
            days_passed = 10
        elif days_passed == '20 or less':
            days_passed = 20
        elif days_passed == 'Any':
            days_passed = 0
        
        for query in queryset:
            num_days = (datetime.now(timezone.utc) - query.list_date).days
          
            if days_passed != 0:
                if num_days > days_passed:
                    slug=query.slug
                    queryset = queryset.exclude(slug__iexact=slug)
        
        has_photos = data['has_photos']
        if has_photos == '1+':
            has_photos = 1
        elif has_photos == '3+':
            has_photos = 3
        elif has_photos == '4+':
            has_photos = 4
        elif has_photos == '10+':
            has_photos = 10
        elif has_photos == '15+':
            has_photos = 15
        
        for query in queryset:
            count = 0
            if query.photo_1:
                count += 1
            if query.photo_2:
                count += 1
            if query.photo_3:
                count += 1
            if query.photo_4:
                count += 1
            # if query.photo_5:
            #     count += 1
            # if query.photo_6:
            #     count += 1
            # if query.photo_7:
            #     count += 1
            # if query.photo_8:
            #     count += 1
            # if query.photo_9:
            #     count += 1
            # if query.photo_10:
            #     count += 1
            # if query.photo_11:
            #     count += 1
            # if query.photo_12:
            #     count += 1
            # if query.photo_13:
            #     count += 1
            # if query.photo_14:
            #     count += 1
            # if query.photo_15:
            #     count += 1
            # if query.photo_16:
            #     count += 1
            # if query.photo_17:
            #     count += 1
            # if query.photo_18:
            #     count += 1
            # if query.photo_19:
            #     count += 1
            # if query.photo_20:
            #     count += 1
            
            if count < has_photos:
                slug = query.slug
                queryset = queryset.exclude(slug__iexact=slug)

        keywords = data['keywords']
        queryset = queryset.filter(title__icontains=keywords)

        serializer = ListingSerializer(queryset, many=True)

        return Response(serializer.data)