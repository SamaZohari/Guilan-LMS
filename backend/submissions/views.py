from rest_framework import generics

from .models import Submission
from .serializers import SubmissionSerializer


class SubmissionListCreateView(
    generics.ListCreateAPIView
):
    queryset = Submission.objects.all()

    serializer_class = (
        SubmissionSerializer
    )


class SubmissionUpdateView(
    generics.UpdateAPIView
):
    queryset = Submission.objects.all()

    serializer_class = (
        SubmissionSerializer
    )