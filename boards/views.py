from django.contrib.auth.decorators import login_required

from django.shortcuts import render, get_object_or_404, redirect
from .forms import boardForm
from .models import *

# Create your views here.

def main_page(request):
    board_hit = Board.objects.all().order_by('-hitcount')[:6]
    board_recent = Board.objects.all().order_by('-create_date')[:4]

    context = {
        'hits' : board_hit,
        'recents' : board_recent
    }
    return render(request, 'boards/main_page.html', context)

def board_list(request):

    boards = Board.objects.all().order_by('-create_date')

    context = {
        'boards': boards
    }

    return render(request, 'boards/board_list.html', context)

def board_detail(request, pk):
    board = Board.objects.get(id=pk)

    board.hitcount += 1
    board.save()

    return render(request, 'boards/board_detail.html', {'board': board})

@login_required
def board_post(request):
    if request.method == 'POST':
        form = boardForm(request.POST, request.FILES)
        if form.is_valid():
            board = form.save(commit=False)
            board.user = request.user
            board.save()
            return redirect('board_list')
    else:
        form = boardForm(request.POST)
    return render(request, 'boards/board_create.html', {'form': form})

@login_required
def board_update(request, pk):
    board = get_object_or_404(Board, pk=pk)
    print(request.POST)
    if request.method == 'POST':
        form = boardForm(request.POST, request.FILES, instance=board)
        if form.is_valid():
            board.user = request.user
            boards = form.save(commit=False)

            if request.POST.get('pet_image') == '' :
                if request.POST.get('image_del') == 'N' :
                    board.pet_image = ''
                else :
                    board.pet_image = board.pet_image
            else :
                board.pet_image = board.pet_image

            boards.save()
            return redirect('board_detail', pk=board.pk)
    else:
        form = boardForm(instance=board)
    return render(request, 'boards/board_update.html', {'form': form, 'board': board})
def board_delete(request, pk):
    board = Board.objects.get(id=pk)
    board.delete()
    return redirect('board_list')
