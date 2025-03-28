from rest_framework import viewsets
from .models import Item
from .serializers import ItemSerializer
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer



def index(request):
    template = loader.get_template('index.html')
    context = {
        'pageflag': 0,
    }
    return HttpResponse(template.render(context, request)) 

def history(request):
    template = loader.get_template('index.html')
    context = {
        'pageflag': 1,
    }
    return HttpResponse(template.render(context, request)) 


def victorina(request):
    template = loader.get_template('index.html')
    context = {
        'pageflag': 2,
    }
    return HttpResponse(template.render(context, request)) 

def contact(request):
    template = loader.get_template('index.html')
    context = {
        'pageflag': 3,
    }
    return HttpResponse(template.render(context, request)) 