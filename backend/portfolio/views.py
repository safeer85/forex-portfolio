from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Portfolio
from .serializers import PortfolioSerializer

@api_view(['GET'])
def portfolio_detail(request):
    # Get the first portfolio entry (or create default if none exists)
    portfolio, created = Portfolio.objects.get_or_create(id=1)
    serializer = PortfolioSerializer(portfolio)
    return Response(serializer.data)

