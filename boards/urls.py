from django.urls import path
from .views import *

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', main_page, name='main'),
    path('board/', board_list, name='board_list'),
    path('board/post/', board_post, name='board_post'),
    path('board/<int:pk>/', board_detail, name='board_detail'),
    path('board/update/<int:pk>/', board_update, name='board_update'),
    path('board/delete/<int:pk>/', board_delete, name='board_delete'),

]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

