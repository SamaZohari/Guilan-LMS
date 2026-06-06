from django.urls import path

from .views import (
    SubmissionListCreateView,
    SubmissionUpdateView,
)

urlpatterns = [
    path(
        "",
        SubmissionListCreateView.as_view(),
    ),

    path(
        "<int:pk>/",
        SubmissionUpdateView.as_view(),
    ),
]