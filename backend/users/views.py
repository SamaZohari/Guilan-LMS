from django.contrib.auth import authenticate

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import RegisterSerializer
from .models import User

from rest_framework.generics import ListAPIView

from .serializers import UserSerializer



class RegisterView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(
            data=request.data
        )

        if serializer.is_valid():
            serializer.save()

            return Response(
                {
                    "message":
                    "User created successfully"
                },
                status=status.HTTP_201_CREATED,
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )


class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(
            username=email,
            password=password,
        )

        if user is None:
            return Response(
                {
                    "error":
                    "Invalid credentials"
                },
                status=status.HTTP_401_UNAUTHORIZED,
            )

        return Response(
            {
                "id": user.id,
                "full_name": user.full_name,
                "email": user.email,
                "role": user.role,
            }
        )
    

class StudentListView(
    ListAPIView
):
    serializer_class = RegisterSerializer

    def get_queryset(self):
        return User.objects.filter(
            role="student"
        )
    

