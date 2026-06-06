from django.urls import path

from .views import (
    TopicListCreateView
)

urlpatterns = [
    path(
        "",
        TopicListCreateView.as_view(),
        name="topics",
    ),
]