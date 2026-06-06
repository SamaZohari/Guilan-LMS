from django.db import models
from users.models import User


class Topic(models.Model):
    title = models.CharField(
        max_length=255
    )

    assigned_to = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="topics",
    )

    status = models.CharField(
        max_length=30,
        default="pending",
    )

    progress = models.IntegerField(
        default=0,
    )

    image = models.URLField(
        blank=True,
        null=True,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    def __str__(self):
        return self.title