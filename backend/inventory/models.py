from django.db import models
from django.db import models

class Medicine(models.Model):
    name = models.CharField(max_length=100)
    batch_no = models.CharField(max_length=50)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    expiry_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

# Create your models here.
