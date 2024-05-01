from rest_framework.permissions import IsAuthenticated
from .models import *
from rest_framework import serializers
from Auth.token_otp import *


class SignupSerializer(serializers.ModelSerializer):

    class Meta:
        model = SignupModel         
        fields = '__all__'

    def validate(self, attrs):

        fullname = attrs.get('fullname')
        mobile = attrs.get('mobile')   
        email = attrs.get('email')
        attrs.get('password')

        existing_fullname = SignupModel.objects.filter(fullname=fullname).first()
        if existing_fullname :
            raise serializers.ValidationError('This Username is already exists')
        existing_record = SignupModel.objects.filter(email=email).first()
        if existing_record:
            raise serializers.ValidationError('A record with this email_ID already exists.')
        
        existing_mobile = SignupModel.objects.filter(mobile=mobile).first()
        if existing_mobile:
            raise serializers.ValidationError('This mobile number is already presesnt')
        
        return attrs

    def create(self, validate_data):
        return SignupModel.objects.create(**validate_data)
    

class LoginSerializer(serializers.Serializer):
    email_or_phone = serializers.CharField(required=True)
    password = serializers.CharField(required=True) 


class MainCategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = CategoryModels
        fields = '__all__'
    
    def validate(self, attrs):
        name = attrs.get('name')

        existing_name = CategoryModels.objects.filter(name= name).first()

        if existing_name:
            raise serializers.ValidationError('This Category Name is already in the List')
        return attrs
    
    def create(self, validated_data):
        return CategoryModels.objects.create(**validated_data)
    




class Products_Serializers(serializers.ModelSerializer):

    # categories = MainCategorySerializers()

    class Meta:
        model = AllProducts_db         
        fields = '__all__'

    def validate(self, attrs):

        return attrs

    def create(self, validate_data):
        return AllProducts_db.objects.create(**validate_data)


class Service_Serializers(serializers.ModelSerializer):

    class Meta:
        model = AllService_db         
        fields = '__all__'

    def validate(self, attrs):


        return attrs

    def create(self, validate_data):
        return AllService_db.objects.create(**validate_data)


class ServiceMainCategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = CategoryService
        fields = '__all__'
    
    def validate(self, attrs):
        name = attrs.get('name')

        existing_name = CategoryService.objects.filter(name= name).first()

        if existing_name:
            raise serializers.ValidationError('This Category Name is already in the List')
        return attrs
    
    def create(self, validated_data):
        return CategoryService.objects.create(**validated_data)
    



class Buissness_DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BussinessDetails_db
        fields = '__all__'

    def validate(self, attrs):
        parent_user = attrs.get('parent_user')
        alternate_contact = attrs.get('alternate_contact')   
        gst_no = attrs.get('gst_no')
        bussiness_name = attrs.get('bussiness_name')
        business_email = attrs.get('business_email')
        alternate_email = attrs.get('alternate_email')
        alternate_contact = attrs.get('alternate_contact')

        # Check for existing records
        # if BussinessDetails_db.objects.filter(parent_user=parent_user).exists():
        #     raise serializers.ValidationError('This User Details already exist')

        # if BussinessDetails_db.objects.filter(gst_no=gst_no).exists():
        #     raise serializers.ValidationError('A record with this GST number already exists.')

        # if BussinessDetails_db.objects.filter(alternate_contact=alternate_contact).exists():
        #     raise serializers.ValidationError('This mobile number is already present')

        # if BussinessDetails_db.objects.filter(bussiness_name=bussiness_name).exists():
        #     raise serializers.ValidationError('This Business Name is already present')

        # if BussinessDetails_db.objects.filter(business_email=business_email).exists(): 
        #     raise serializers.ValidationError('This Business Email is already present')

        # if BussinessDetails_db.objects.filter(alternate_email=alternate_email).exists(): 
        #     raise serializers.ValidationError('This Alternate Business Email is already present')

        # if not bussiness_name :
        #     raise serializers.ValidationError('Its Compulsary To fill bussiness_name')
        # return attrs

    def create(self, validated_data):
        return BussinessDetails_db.objects.create(**validated_data)




class FetchCategorySerializer(serializers.Serializer):
    UID = serializers.CharField(required=True)  
    parent_id = serializers.CharField(required=False) 
    main_categories = MainCategorySerializers(many=True, read_only=True)  




class Size_Serializers(serializers.ModelSerializer):
    class Meta:
        model = Sizes
        fields = '__all__'   

    def validate(self, attrs):    
        size_type = attrs.get('size_type')
        parent_userid = attrs.get('parent_userid')
        existing = Sizes.objects.filter(parent_userid=parent_userid ,size_type=size_type).first()

        if existing:
            raise serializers.ValidationError('The User has already taken this Size Type')

        return attrs   
    
    def create(self, validated_data):
        return Sizes.objects.create(**validated_data)

class Measurement_Serializers(serializers.ModelSerializer):
    class Meta:
        model = Measurement_UnitsModels
        fields = '__all__'   
    def validate(self, attrs):

        units = attrs.get('units')
        parent_userid = attrs.get('parent_userid')
        existing = Measurement_UnitsModels.objects.filter(parent_userid=parent_userid ,units=units).first()

        if existing:
            raise serializers.ValidationError('The User has already taken this Measurement Type')

        return attrs   
    def create(self, validated_data):
        return Measurement_UnitsModels.objects.create(**validated_data)
    

class Bussiness_OfferingSerilizers(serializers.ModelSerializer):
    class Meta:
        model = Bussiness_Offering
        fields = "__all__"
    def validate(self, attrs):

        image1 = attrs.get('image1')
        description1 = attrs.get('description1')
        categories1 = attrs.get('categories1')
        existing = Bussiness_Offering.objects.filter(categories1=categories1).first()

        if existing:
            raise serializers.ValidationError('The Category Post has already taken this Measurement Type')

        return attrs   
    def create(self, validated_data):
        return Bussiness_Offering.objects.create(**validated_data)



