from django.contrib import admin
from .models import Message, Room, AdminandAgent


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

@admin.register(AdminandAgent)
class AdminandAgentAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'role')
    list_filter = ('role',)
    search_fields = ('first_name', 'last_name', 'email')
    ordering = ('last_name', 'first_name')

    def save_model(self, request, obj, form, change):
        if change:  # If the record is being updated
            obj.password = form.initial['password']  # Prevent password changes in the admin interface
        super().save_model(request, obj, form, change)