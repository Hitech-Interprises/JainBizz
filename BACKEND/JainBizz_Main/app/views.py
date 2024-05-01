from django.shortcuts import render
from rest_framework import views
from rest_framework.response import Response
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.exceptions import ValidationError
from Auth.token_otp import *
from rest_framework.parsers import MultiPartParser, FormParser

#------------------Imported Files---------------##
from .models import *
from .serializers import *
# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]
    return Response(routes, safe=False)

class SignView(views.APIView):
    serializer_class = SignupSerializer
    @method_decorator(csrf_exempt, name='dispatch')
    def post(self, request, formate=None):
        serializer = SignupSerializer(data=request.data)
        try:
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                print("your data is saved")
            return Response({'msg': 'SignupSerializers Successful'})
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class LoginView(views.APIView):
    
    serializer_class = LoginSerializer
    @method_decorator(csrf_exempt, name='dispatch')
    def post(self, request, format=None):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email_or_phone = serializer.validated_data.get('email_or_phone')
            password = serializer.validated_data.get('password')
            
            try:
            # Check if the email_or_phone exists in either email or phone field
                user = SignupModel.objects.filter(models.Q(email=email_or_phone) | models.Q(mobile=email_or_phone)).first()
                uid = str(user.userid)
                if user and user.password == password:
                    token = generate_token(email_or_phone,uid )
                    print(token,"---------------------------------------")
                    return Response({'msg': 'Login successful', 'status':1, 'access-token':token}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': str(e), 'status':0,'msg':'Login Not Successful'} )                
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BussinessDetailsView_Create(views.APIView):
    serializer_class = Buissness_DetailsSerializer

    @method_decorator(csrf_exempt, name='dispatch')
    def post(self, request, format=None):
        try:
            serializer = Buissness_DetailsSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'msg': 'Bussiness details added successfully', 'status':1}, status=status.HTTP_201_CREATED, )
        except ValidationError as e:
            return Response({'Error': e.detail, 'status':0}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'An error occurred while processing the request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


class AllCategoryView_Create(views.APIView):
    serializer_class = MainCategorySerializers

    @method_decorator(csrf_exempt, name='dispatch')

    def post(self, request, formate=None):
        try:
            serializer = MainCategorySerializers(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'msg': 'Category details added successfully', 'status':1}, status=status.HTTP_201_CREATED, )
        except ValidationError as e:
            return Response({'Error': e.detail, 'status':0}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'An error occurred while processing the Category request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


        
#--------------IF THROUGH FOREIGN KEY YOU HAVE TO FETCH THE THE LIST ---------------------- 
        
class CategoryListView(views.APIView):
    def post(self, request, format=None):
        try:
            userid = request.data.get('userid')
            parentid = request.data.get('parentid')
            
            if not userid:
                return Response({"detail": "userid is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
            
            categories = CategoryModels.objects.filter(parent_userid=userid)
            
            if parentid is not None:
                categories = categories.filter(parent_category=parentid)
            else:
                categories = categories.filter(parent_category__isnull=True)
                
            serializer = MainCategorySerializers(instance=categories, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": "An error occurred while processing the request."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


        
class SizeViews(views.APIView):
    serializer_class = Size_Serializers

    @method_decorator(csrf_exempt, name='dispatch')

    def post(self, request, formate=None):
        try:
            serializer = Size_Serializers(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'msg': 'Category details added successfully', 'status':1}, status=status.HTTP_201_CREATED, )
        except ValidationError as e:
            return Response({'Error': e.detail, 'status':0}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'An error occurred while processing the Category request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        


class SizeViews_List(views.APIView):

    def post(self, request, format=None):
        try:
            parent_userid = request.data.get('userid')
            print(parent_userid,"===============")
           
            
            if not parent_userid:
                return Response({"detail": "userid is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
            
            categories = Sizes.objects.filter(parent_userid=parent_userid)
            
         
                
            serializer = Size_Serializers(categories, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": "An error occurred while processing the request."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class MeasurementViews(views.APIView):
    serializers = Measurement_Serializers
    @method_decorator(csrf_exempt, name='dispatch')
    def post(self, request, format=None):
        try:
            serializer = Measurement_Serializers(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'msg': 'Measurement_Serializers details added successfully', 'status':1}, status=status.HTTP_201_CREATED, )
        except ValidationError as e:
            return Response({'Error': e.detail, 'status':0}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'An error occurred while processing the Category request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class MeasurementViews_List(views.APIView):

    def post(self, request, format=None):
        try:
            parent_userid = request.data.get('userid')
            print(parent_userid,"===============")
                     
            if not parent_userid:
                return Response({"detail": "userid is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
            
            categories = Measurement_UnitsModels.objects.filter(parent_userid=parent_userid)        
                
            serializer = Measurement_Serializers(categories, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": "An error occurred while processing the request."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        





class productdetails_create(views.APIView):
    serializer_class = Products_Serializers
    parser_classes = (MultiPartParser, FormParser)


    @method_decorator(csrf_exempt, name='dispatch')    
    def post(self, request, formate=None):
        try:
            serializer = Products_Serializers(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'msg': 'Products details added successfully', 'status':1}, status=status.HTTP_201_CREATED, )
        except ValidationError as e:
            return Response({'Error': e.detail, 'status':0}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'An error occurred while processing the Category request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class productdetails_List(views.APIView):
    def post(self, request, format=None):
        try:
            parent_userid = request.data.get('userid')
            print(parent_userid,"===============")
                     
            if not parent_userid:
                return Response({"detail": "userid is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
            
            categories = AllProducts_db.objects.filter(parent_userid=parent_userid)        
                
            serializer = Products_Serializers(categories, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": "An error occurred while processing the request."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class productdetails_Delete(views.APIView):
    serializer_class = Products_Serializers
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, formate=None):
            try:
                parent_userid = request.data.get('userid')
                allproduct_id = request.data.get('allproduct_id')

                if not parent_userid:
                    return Response({"detail": "userid is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
                
                if not allproduct_id:
                    return Response({"detail": "allproduct_id is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)

                            

                Products = AllProducts_db.objects.filter(parent_userid=parent_userid, allproduct_id=allproduct_id)
                Products.delete()
                return Response({'msg':'Your Products Row is Deleted'}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)    


class productdetails_View(views.APIView):
    serializer_class = Products_Serializers
    parser_classes = (MultiPartParser, FormParser)
    
    def post(self, request, formate=None):
        try:
            parent_userid = request.data.get('userid')
            allproduct_id = request.data.get('allproduct_id')

            if not parent_userid:
                return Response({"detail": "userid is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
                
            if not allproduct_id:
                return Response({"detail": "allproduct_id is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)

            # Fetching the product
            products = AllProducts_db.objects.filter(parent_userid=parent_userid, allproduct_id=allproduct_id)
            serializer = Products_Serializers(products, many=True)
            print(serializer)

            # # Modify serializer data to include category name
            # for product_data in serializer.data:
            #     category_id = product_data.get('categories')
            #     category = CategoryModels.objects.get(cate_id=category_id)
            #     product_data['category_name'] = category.name

            #     print("444444444444444")
            #     print(category.name)

            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
            

class Category_SelectedList(views.APIView):
    def post(self, request, format=None):
        try:
            userid = request.data.get('userid')
            cate_id = request.data.get('cate_id')
            
            if not userid:
                return Response({"detail": "userid is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
            
            if not cate_id:
                return Response({"detail": "cate_id is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
            
            categories = CategoryModels.objects.filter(parent_userid=userid,cate_id=cate_id)
            
            # if cate_id is not None:
            #     categories = categories.filter(cate_id=cate_id)
            
                
            serializer = MainCategorySerializers(categories, many=True)
            print(serializer,"================")
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": "An error occurred while processing the request."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)             



        
class productdetails_update(views.APIView):
    serializer_class = Products_Serializers
    parser_classes = (MultiPartParser, FormParser)

    @method_decorator(csrf_exempt, name='dispatch')
    def post(self, request, format=None):
        print("Entered")
        try:
           
            product_id = request.data.get('product_id')
            print(product_id,"----product-1")
            if not product_id:
                return Response({"detail": "product_id is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
            product = AllProducts_db.objects.get(allproduct_id=product_id)
            print(product,"===========")

            # Serialize the existing instance with the data from the request
            serializer = Products_Serializers(product, data=request.data)

            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'msg': 'Product details updated successfully', 'status': 1}, status=status.HTTP_200_OK)

        except AllProducts_db.DoesNotExist:
            return Response({"detail": "Product not found."}, status=status.HTTP_404_NOT_FOUND)

        except ValidationError as e:
            return Response({'Error': e.detail, 'status': 0}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({'msg': 'An error occurred while processing the request.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class servicedetails_create(views.APIView):
    serializer_class = Service_Serializers
    parser_classes = (MultiPartParser, FormParser)


    @method_decorator(csrf_exempt, name='dispatch')    
    def post(self, request, formate=None):
        try:
            serializer = Service_Serializers(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'msg': 'Service details added successfully', 'status':1}, status=status.HTTP_201_CREATED, )
        except ValidationError as e:
            return Response({'Error': e.detail, 'status':0}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'An error occurred while processing the Category request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class AllServiceView_Create(views.APIView):
    serializer_class = ServiceMainCategorySerializers

    @method_decorator(csrf_exempt, name='dispatch')

    def post(self, request, formate=None):
        try:
            serializer = ServiceMainCategorySerializers(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'msg': 'Category details added successfully', 'status':1}, status=status.HTTP_201_CREATED, )
        except ValidationError as e:
            return Response({'Error': e.detail, 'status':0}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'An error occurred while processing the Category request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        

class ServiceListView(views.APIView):
    def post(self, request, format=None):
        try:
            userid = request.data.get('userid')
            parentid = request.data.get('parentid')
            
            if not userid:
                return Response({"detail": "userid is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
            
            categories = CategoryService.objects.filter(parent_userid=userid)
            
            if parentid is not None:
                categories = categories.filter(parent_category=parentid)
            else:
                categories = categories.filter(parent_category__isnull=True)
                
            serializer = ServiceMainCategorySerializers(instance=categories, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": "An error occurred while processing the request."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class servicedetails_List(views.APIView):
    def post(self, request, format=None):
        try:
            parent_userid = request.data.get('userid')
            print(parent_userid,"===============")
                     
            if not parent_userid:
                return Response({"detail": "userid is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
            
            categories = AllService_db.objects.filter(parent_userid=parent_userid)        
                
            serializer = Service_Serializers(categories, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"detail": "An error occurred while processing the request."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class servicedetails_Delete(views.APIView):
    serializer_class = Products_Serializers
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, formate=None):
            try:
                parent_userid = request.data.get('userid')
                allservice_id = request.data.get('allservice_id')

                if not parent_userid:
                    return Response({"detail": "userid is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
                
                if not allservice_id:
                    return Response({"detail": "allservice_id is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)

                            

                Products = AllService_db.objects.filter(parent_userid=parent_userid, service_id=allservice_id)
                Products.delete()
                return Response({'msg':'Your Service Row is Deleted'}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)    



class Servicedetails_View(views.APIView):
    serializer_class = Products_Serializers
    parser_classes = (MultiPartParser, FormParser)
    
    def post(self, request, formate=None):
        try:
            parent_userid = request.data.get('userid')
            service_id = request.data.get('service_id')

            if not parent_userid:
                return Response({"detail": "userid is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
                
            if not service_id:
                return Response({"detail": "service_id is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)

            # Fetching the product
            services = AllService_db.objects.filter(parent_userid=parent_userid, service_id=service_id)
            serializer = Service_Serializers(services, many=True)


            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class servicedetails_update(views.APIView):
    serializer_class = Products_Serializers
    parser_classes = (MultiPartParser, FormParser)

    @method_decorator(csrf_exempt, name='dispatch')
    def post(self, request, format=None):
        print("Entered")
        try:
           
            service_id = request.data.get('service_id')
            print(service_id,"----product-1")
            if not service_id:
                return Response({"detail": "service_id is required in the request body."}, status=status.HTTP_400_BAD_REQUEST)
            product = AllService_db.objects.get(service_id=service_id)
            print(product,"===========")

            # Serialize the existing instance with the data from the request
            serializer = Service_Serializers(product, data=request.data)

            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'msg': 'Service details updated successfully', 'status': 1}, status=status.HTTP_200_OK)

        except AllProducts_db.DoesNotExist:
            return Response({"detail": "Service not found."}, status=status.HTTP_404_NOT_FOUND)

        except ValidationError as e:
            return Response({'Error': e.detail, 'status': 0}, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({'msg': 'An error occurred while processing the request.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class Bussiness_OfferingCreate(views.APIView):
    serializer_class = Bussiness_OfferingSerilizers

    @method_decorator(csrf_exempt, name='dispatch')

    def post(self, request, formate=None):
        try:
            serializer = Bussiness_OfferingSerilizers(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response({'msg': 'Bussiness Offering details added successfully', 'status':1}, status=status.HTTP_201_CREATED, )
        except ValidationError as e:
            return Response({'Error': e.detail, 'status':0}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'msg': 'An error occurred while processing the Bussiness Offering request'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
