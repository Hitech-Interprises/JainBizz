from django.contrib import admin
from django.urls import path, include
from .views import *
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf import settings
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('Signup/', SignView.as_view()),
    path('Login/', LoginView.as_view()),
    path('Buissness/', BussinessDetailsView_Create.as_view()),
    path('AllCategory/', AllCategoryView_Create.as_view()),
    # path('AllCategoryView_List/', AllCategoryView_List.as_view()),
    path('MainCategoryView_List/', CategoryListView.as_view()),
    path('Product Add/', productdetails_create.as_view()),
    path('SizeList/', SizeViews_List.as_view()),
    path('SizeViews/', SizeViews.as_view()),
    path('Add_Measurement_Units/', MeasurementViews.as_view()),
    path('List_Measurement_Units/', MeasurementViews_List.as_view()),
    path('Product List/', productdetails_List.as_view()),
    path('Product Deleted/', productdetails_Delete.as_view()),
    path('Product Update/', productdetails_update.as_view()),
    path('Product_View-EditPage/', productdetails_View.as_view()),
    path('SelectedProduct Page/', Category_SelectedList.as_view()),
    path('Service_Add/', servicedetails_create.as_view()),
    path('AllServices/', AllServiceView_Create.as_view()),
    path('ServiceViewList/', ServiceListView.as_view()),
    path('Service_List/', servicedetails_List.as_view()),
    path('Service_Deleted/', servicedetails_Delete.as_view()),
    path('Sevice_Update/', servicedetails_update.as_view()),
    path('Service_View_EditPage/', Servicedetails_View.as_view()),
    path('Create_BussuinessOffering/', Bussiness_OfferingCreate.as_view()),
]

# Serve media files during development
# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
