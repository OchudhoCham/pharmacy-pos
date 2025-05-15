from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from inventory.views import MedicineViewSet

router = routers.DefaultRouter()
router.register(r'medicines', MedicineViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
