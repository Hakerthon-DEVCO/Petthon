from django import forms
from .models import Board


# boardForm
class boardForm(forms.ModelForm):
    class Meta:
        model = Board
        fields = ['title', 'content', 'pet_name', 'pet_age', 'pet_image']


