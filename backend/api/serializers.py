from rest_framework import serializers 
from core.models import Advert 

class AdvertSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Advert 
        fields = ["title", "description", "price", "image", "link"]