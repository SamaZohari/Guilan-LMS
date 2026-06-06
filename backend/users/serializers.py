from rest_framework import serializers
from .models import User



class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True
    )

    class Meta:
        model = User
        fields = [
            "full_name",
            "email",
            "password",
            "role",
        ]

    def create(self, validated_data):
        email = validated_data["email"]

        user = User.objects.create_user(
            username=email,
            email=email,
            full_name=validated_data["full_name"],
            password=validated_data["password"],
            role=validated_data["role"],
        )

        return user


class UserSerializer(
    serializers.ModelSerializer
):
    class Meta:
        model = User

        fields = [
            "id",
            "full_name",
            "email",
            "role",
        ]