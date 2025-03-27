from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer
from django.shortcuts import render

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer



def index(request):
    return render(request, 'index.html')