# todo_list/todo_app/urls.py
from django.urls import path
from .views import TodoListView

urlpatterns = [
    # URL for fetching the list
    path("todo/", TodoListView.as_view(), name="todo-list"),

    # URL for fetching the list
    path("todo/addtodo/", TodoListView.as_view(), name="add-task"),
]
