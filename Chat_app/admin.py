from django.contrib import admin
from .models import Message, Room


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("sent_by", "body", "created_at")
    search_fields = ("sent_by",)
    list_filter = ("created_at",)
    date_hierarchy = "created_at"


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ("uuid", "client", "status", "created_at")
    search_fields = ("uuid", "client")
    list_filter = ("status", "created_at")
    date_hierarchy = "created_at"
    filter_horizontal = (
        "messages",
    )  # Assuming you want a horizontal filter for messages
