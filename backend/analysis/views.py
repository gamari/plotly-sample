import random

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

from analysis.serializers import DataPointSerializer

class DataListView(APIView):
    def get(self, request):
        queryset = []
        
        # ダミーデータを作成
        for _ in range(10):
            x = random.uniform(0, 100)
            y = random.uniform(0, 100)
            data = {'x': x, 'y': y}
            queryset.append(data)
        
        serializer = DataPointSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)