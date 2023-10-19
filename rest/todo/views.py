# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from pymongo import MongoClient
from bson import ObjectId

mongo_uri = "mongodb+srv://agnibit1309:yo1RyuTHEdQ51Nyx@todo-django.xykmx69.mongodb.net/?retryWrites=true&w=majority"
db = MongoClient(mongo_uri)['test_db']
collection = db['todo1']


class TodoListView(APIView):
    def get(self, request):
        # Implement this method - return all todo items from db instance above.
        print("fetch: ", request)
        try:
            todos = list(collection.find({}))
            if (todos.__len__):
                return Response({"data": todos, "error": None}, status=status.HTTP_200_OK)
            else:
                return Response({"data": None, "error": "No Data Found"}, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response({"data": None, "error": Exception}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        # Implement this method - accept a todo item in a mongo collection, persist it using db instance above.
        print("add: ", request)
        title = request.title
        try:
            existing_task = collection.find_one({"task": title})
            if existing_task:
                return Response({"data": None, "error": "Already Exists"}, status=status.HTTP_409_CONFLICT)

            todo_data = {}
            todo_data["id"] = ObjectId()
            todo_data["title"] = title
            result = collection.insert_one(todo_data)
            return Response({"data": result.id, "error": None}, status=status.HTTP_200_OK)
        except:
            return Response({"data": None, "error": Exception}, status=status.HTTP_400_BAD_REQUEST)
