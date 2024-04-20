from rest_framework import serializers

class DataPointSerializer(serializers.Serializer):
    x = serializers.FloatField()
    y = serializers.FloatField()