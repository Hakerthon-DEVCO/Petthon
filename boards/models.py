from django.db import models
from django.conf import settings
from django.urls import reverse

# Create your models here.

class Board(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name='post')
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=200, blank=True)

    pet_name = models.CharField(max_length=20)
    pet_age = models.CharField(max_length=10)
    pet_image = models.ImageField(upload_to='pet/%Y/%m/%d', null=True, blank=True)

    create_date = models.DateTimeField(auto_now_add=True)
    hitcount = models.IntegerField(default=0)
    image_del = models.BooleanField(default=False)

    def __str__(self):
        return self.title