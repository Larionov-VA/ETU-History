from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet
from .views import index
from .views import history
from .views import victorina
from .views import contact

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', index, name='index'),
    path('history/', history, name='history'),
    path('victorina/', victorina, name='victorina'),
    path('contact/', contact, name='contact'),

]



