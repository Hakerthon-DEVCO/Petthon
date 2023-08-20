from django.contrib.auth import authenticate, login

from .models import *
from boards.models import *
from .forms import UserForm
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404

def signup(request):
    if request.method == "POST":
        print(request.POST)
        form = UserForm(request.POST)
        print(form.is_valid())
        if form.is_valid():
            account = form.save(commit=False)
            username = form.cleaned_data.get('username')
            email = form.cleaned_data.get('email')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, email=email, password=raw_password)
            if user is not None:
                login(request, user)
            account.save()
            return redirect('accounts:login')
    else:
        form = UserForm()
    return render(request, 'accounts/signup.html', {'form': form})

@login_required
def my_page(request, pk):
    user = get_object_or_404(User, pk=pk)
    user_posts = user.post.all()

    count = user_posts.count()

    context = {
        'user': user,
        'user_posts' : user_posts,
        'count' : count
    }
    return render(request, "accounts/mypage.html", context)


