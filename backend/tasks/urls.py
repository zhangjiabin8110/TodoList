from rest_framework import routers
from .views import TodosListViewSet

router = routers.DefaultRouter()
router.register(r'tasks',TodosListViewSet)



