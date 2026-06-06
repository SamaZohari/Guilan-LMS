from rest_framework import generics

from .models import Topic
from .serializers import TopicSerializer


class TopicListCreateView(
    generics.ListCreateAPIView
):
    queryset = Topic.objects.all()

    serializer_class = (
        TopicSerializer
    )