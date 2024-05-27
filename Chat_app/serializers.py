from rest_framework import serializers
from .models import Message, Room
from .models import AdminandAgent # Add Prasanth Senthilvel
#Prasanth Senthilvel changes start
class AdminandAgentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminandAgent
        fields = ['email', 'first_name', 'last_name', 'role']
#Prasanth Senthilvel changes end
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'