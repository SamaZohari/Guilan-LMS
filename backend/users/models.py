from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    ROLE_CHOICES = (
        ("teacher", "Teacher"),
        ("student", "Student"),
    )

    full_name = models.CharField(
        max_length=255,
        blank=True,
        default=""
    )   

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default="student",
    )

    email = models.EmailField(
        unique=True
    )

    def __str__(self):
        return self.full_name