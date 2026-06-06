from django.contrib import admin
from django.urls import (
    path,
    include,
)
from django.http import JsonResponse

def home(request):
    return JsonResponse({
        "message": "Guilan LMS API Running"
    })


urlpatterns = [
    path("", home),
    path("admin/", admin.site.urls),
    
    path(
        "admin/",
        admin.site.urls,
    ),

    path(
        "api/users/",
        include("users.urls"),
    ),

    path(
        "api/topics/",
        include("topics.urls"),
    ),

    path(
        "api/submissions/",
        include("submissions.urls"),
    ),
]
