from django.db import models

from users.models import User
from topics.models import Topic


class Submission(models.Model):
    topic = models.ForeignKey(
        Topic,
        on_delete=models.CASCADE,
    )

    student = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )

    video_url = models.URLField()

    status = models.CharField(
        max_length=30,
        default="pending",
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    def __str__(self):
        return f"{self.student.username}"