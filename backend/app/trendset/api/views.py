from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(["GET"])
def get_data(request):
    person = {"name": "Matthew",
              "age:": 18}
    return Response(person)

@api_view(["POST"])
def add_item(request):
    data = request.data
    print(data)
    return Response(data)
    