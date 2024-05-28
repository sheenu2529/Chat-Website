# Generated by Django 5.0.6 on 2024-05-28 12:43

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("Chat_app", "0004_alter_room_agent_alter_room_name_alter_room_room_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="room",
            name="agent",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="Chat_app.adminandagent",
            ),
        ),
    ]
