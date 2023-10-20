# todo_list/todo_app/urls.py
from django.urls import path
from .views import TodoListView, TodoListAdd

urlpatterns = [
    # URL for fetching the list
    path("", TodoListView.as_view(), name="todo-list"),

    # URL for fetching the list
    path("addtodo/", TodoListAdd.as_view(), name="add-task"),
]
