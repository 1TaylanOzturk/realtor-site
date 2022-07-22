from rest_framework import viewsets
from core.models import Advert
from .serializers import AdvertSerializer

class AdvertViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Advert.objects.all()
    serializer_class = AdvertSerializer
