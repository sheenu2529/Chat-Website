from django.contrib import admin
from .models import AdminandAgent, Message, Room, NewUser

@admin.register(AdminandAgent)
class AdminandAgentAdmin(admin.ModelAdmin):
    list_display = ('email', 'first_name', 'last_name', 'role')
    search_fields = ('first_name', 'last_name', 'email')
    list_filter = ('role',)

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('body', 'sent_by', 'created_at', 'created_by')
    search_fields = ('body', 'sent_by', 'created_by__username')
    list_filter = ('created_at', 'created_by')

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ('room_id', 'name', 'status', 'agent')
    search_fields = ('room_id', 'name', 'status', 'agent__name')
    list_filter = ('status',)

@admin.register(NewUser)
class NewUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)
    search_fields = ('name',)

# Register your models here.
