from django.db import models
import string
import random
import uuid
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
import datetime
import os


# Create your models here.

class SignupModel(models.Model):
    userid = models.UUIDField(default=uuid.uuid4, unique=True, editable=False,primary_key=True) 
    usertype = models.CharField(max_length= 50, blank= False, null=False, help_text="Required")
    fullname = models.CharField(max_length= 50, blank= False, null=False, help_text="Required")
    email = models.EmailField(max_length=50, help_text='Required')
    mobile = models.CharField(max_length= 12, blank= False, null=False,help_text='Required')
    password = models.CharField(max_length= 15, blank= False, null=False, help_text='Required')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.fullname)


class BussinessDetails_db(models.Model):
    details_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False,primary_key=True)  
    parent_userid =  models.ForeignKey(SignupModel, on_delete=models.CASCADE, to_field='userid', default='be5a6874-83f4-4c58-9c89-2b0918b3f874') #---USERID
    gst_check = models.BooleanField(default=1, blank= False, null=False, help_text="Required")
    fssai_check = models.BooleanField(default=1, blank= False, null=False, help_text="Required")
    iec_check = models.BooleanField(default=1, blank= False, null=False, help_text="Required")
    gst_no = models.CharField(max_length= 15,default=0, blank= True, null=True)
    fssai_no = models.CharField(max_length= 14,default=0, blank= True, null=True)
    iec_no = models.CharField(max_length= 10,default=0 ,blank= True, null=True)
    iso_no = models.CharField(max_length= 7, default=0 ,blank= True, null=True)
    company_type = models.CharField(max_length= 100,) 
    bussiness_name =  models.CharField(max_length= 50, blank= False, null=False, help_text="Required")
    iso_check = models.BooleanField(default=1, blank= False, null=False, help_text="Required")
    annual_turnover = models.CharField(max_length= 100)
    address1 = models.TextField(max_length =30,  blank= False, null=False, help_text='Required')
    address2 = models.TextField(max_length =30,  blank= False, null=False, help_text='Required')
    country = models.CharField(max_length= 15,blank= False, null=False, help_text='Required')
    state = models.CharField(max_length= 15, blank= False, null=False, help_text='Required')
    city = models.CharField(max_length= 15, blank= False, null=False, help_text='Required')
    pincode = models.CharField(max_length= 10, blank= False, null=False, help_text='Required')
    taluka =  models.CharField(max_length= 15, blank= False, null=False, help_text='Required')
    town_village = models.CharField(max_length= 15, blank= False, null=False, help_text='Required')
    establishment_yrs = models.DateField(blank= False, null=False, help_text='Required')
    business_email = models.EmailField(blank=False, null=False, help_text='Required')
    business_contact =  models.CharField(max_length=10, blank=False, null=False, help_text='Required')
    business_whatsapp = models.CharField(max_length=10, blank=True, null=True,default=0 )
    alternate_email = models.EmailField( blank=True, null=True,default=0)
    alternate_contact = models.CharField(max_length=12, blank=True, null=True,default=0)
    udyog_adhar_check = models.BooleanField(default=1, blank= False, null=False, help_text="Required")
    udyog_adhar_no = models.CharField(max_length=12,default=0 ,blank= True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.details_id)





class CategoryModels(models.Model):
    cate_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False,primary_key=True) 
    name = models.CharField(max_length=256,unique=True,)
    image = models.ImageField(upload_to='images/',blank=True, null=True)
    description = models.TextField()
    parent_category = models.ForeignKey('self', blank= True, null= True,related_name = "children_categories", on_delete= models.CASCADE, default=None, to_field='cate_id')
    parent_userid =  models.ForeignKey(SignupModel, on_delete=models.CASCADE, to_field='userid',default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    # count = models.IntegerField(default=0,blank= False, null=False,)


    def __str__(self):
        return f"{self.cate_id} - {self.name}"


class Sizes(models.Model):
    size_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False,primary_key=True) 
    size_type = models.CharField(max_length=15, blank=False, null=False,  unique=True, editable=True)
    parent_userid =  models.ForeignKey(SignupModel, on_delete=models.CASCADE, to_field='userid', default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.size_type


class Measurement_UnitsModels(models.Model):
    measurement_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False,primary_key=True) 
    units = models.CharField(max_length=15, blank=False, null=False, unique=True, editable=True)
    parent_userid =  models.ForeignKey(SignupModel, on_delete=models.CASCADE, to_field='userid',default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.units


class CategoryService(models.Model):
    cate_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False,primary_key=True) 
    name = models.CharField(max_length=256,unique=True,)
    image = models.ImageField(upload_to='images/',blank=True, null=True)
    description = models.TextField()
    parent_category = models.ForeignKey('self', blank= True, null= True,related_name = "children_categories", on_delete= models.CASCADE, default=None, to_field='cate_id')
    parent_userid =  models.ForeignKey(SignupModel, on_delete=models.CASCADE, to_field='userid',default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)



    def __str__(self):
        return f"{self.cate_id} - {self.name}"

def filepath(request, filename):
    old_filename = filename
    timeNow = datetime.datetime.now().strftime('%Y%m%d%H:%M:%S')
    filename = '%s%s'%(timeNow, old_filename)
    return os.path.join('images/',filename)
    
class AllService_db(models.Model):
    service_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False,primary_key=True) 
    service_name= models.CharField(max_length=80,blank= True, null= True)
    service_availability = models.BooleanField(default=1, blank= False, null=False, help_text="Required")
    service_type= models.CharField(max_length=80,blank= True, null= True)
    target_audience= models.CharField(max_length=80,blank= True, null= True)
    keywords_tags = models.CharField(max_length=80,blank= True, null= True)
    images = models.ImageField(upload_to=filepath,blank=True, null=True)
    vedio = models.FileField(upload_to='videos/',blank=True, null=True)
    terms_conditions = models.TextField(blank= True, null= True)
    payment_opt = models.CharField(max_length=80,blank= True, null= True)
    discounts_promo = models.TextField(max_length=200,blank= True, null= True)
    related_services = models.TextField(max_length=200,blank= True, null= True)
    custom_fields = models.TextField(max_length=200,blank= True, null= True)
    service_package = models.CharField(max_length=200,blank= True, null= True)
    categories = models.ForeignKey(CategoryService,on_delete=models.CASCADE, to_field='cate_id')
    documentation = models.TextField(max_length=200,blank= True, null= True)
    service_location = models.CharField(max_length=200,blank= True, null= True)
    service_provider = models.CharField(max_length=200,blank= True, null= True)
    service_cost = models.CharField(max_length=200,blank= True, null= True)
    service_benefits = models.CharField(max_length=200,blank= True, null= True)
    service_duration = models.CharField(max_length=200,blank= True, null= True)
    service_security = models.CharField(max_length=200,blank= True, null= True)
    service_custom = models.CharField(max_length=200,blank= True, null= True)
    parent_userid =  models.ForeignKey(SignupModel, on_delete=models.CASCADE, to_field='userid',  default='be5a6874-83f4-4c58-9c89-2b0918b3f874')
    date = models.DateField(blank= False, null=False, help_text='Required')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)



class AllProducts_db(models.Model):

    allproduct_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False,primary_key=True) 
    product_name= models.CharField(max_length=80)
    features =models.TextField(blank= True, null= True,)
    short_description = models.CharField(max_length=56,blank= True, null= True,)
    description= models.TextField(blank= True, null= True,)
    warranty_information = models.CharField(max_length=80,blank= True, null= True,)
    additional_information= models.TextField(blank= True, null= True,)
    sizes = models.ForeignKey(Sizes, on_delete=models.CASCADE, to_field='size_type')
    offers = models.TextField(blank= True, null= True,)
    sku = models.CharField(max_length=56,blank= True, null= True,)
    categories = models.ForeignKey(CategoryModels,on_delete=models.CASCADE, to_field='cate_id')
    price = models.CharField(max_length=56)
    images1 = models.ImageField(upload_to='images/',blank=True, null=True)
    images2 = models.ImageField(upload_to='images/',blank=True, null=True)
    images3 = models.ImageField(upload_to='images/',blank=True, null=True)
    images4 = models.ImageField(upload_to='images/',blank=True, null=True)
    images5 = models.ImageField(upload_to='images/',blank=True, null=True)
    variants1 = models.ImageField(upload_to='images/',blank=True, null=True)
    variants2 = models.ImageField(upload_to='images/',blank=True, null=True)
    variants3 = models.ImageField(upload_to='images/',blank=True, null=True)
    variants4 = models.ImageField(upload_to='images/',blank=True, null=True)
    variants5 = models.ImageField(upload_to='images/',blank=True, null=True)
    brand = models.CharField(max_length=56)
    specifications = models.TextField(blank= True, null= True,)
    reviews_ratings = models.CharField(max_length=56,blank= True, null= True,)
    date = models.DateField(blank= False, null=False, help_text='Required')
    related_products = models.TextField(blank= True, null= True,)
    product_link = models.CharField(max_length=56, blank= True, null= True,)
    product_options = models.CharField(max_length=56,blank= True, null= True,)
    product_availability = models.BooleanField(default=1, blank= True, null=True, help_text="Required")
    productweight_dimensions = models.CharField(max_length=56, blank= True, null= True,)
    measurement_units = models.ForeignKey(Measurement_UnitsModels, on_delete=models.CASCADE, to_field='units')
    assembly_installation = models.TextField(blank= True, null= True,)
    others_deatils = models.TextField(blank= True, null= True,)
    parent_userid =  models.ForeignKey(SignupModel, on_delete=models.CASCADE, to_field='userid',  default='be5a6874-83f4-4c58-9c89-2b0918b3f874')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


class Bussiness_Offering(models.Model):

    boffering_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False,primary_key=True) 
    image1 = models.ImageField(upload_to='BOfferings/',blank=False, null=False,help_text="Required")
    image2 = models.ImageField(upload_to='BOfferings/',blank=True, null=True)
    image3 = models.ImageField(upload_to='BOfferings/',blank=True, null=True)
    image4= models.ImageField(upload_to='BOfferings/',blank=True, null=True)
    image5 = models.ImageField(upload_to='BOfferings/',blank=True, null=True)
    description1 = models.TextField(max_length=200, blank= False, null= False,help_text="Required")
    description2 = models.TextField(max_length=200,blank= True, null= True,)
    description3 = models.TextField(max_length=200,blank= True, null= True,)
    description4 = models.TextField(max_length=200 ,blank= True, null= True,)
    description5 = models.TextField(max_length=200, blank= True, null= True,)
    categories1 = models.CharField(max_length=20, blank= False, null= False,help_text="Required")
    categories2 = models.CharField(max_length=20, blank= True, null= True,)
    categories3 = models.CharField(max_length=20, blank= True, null= True,)
    categories4 = models.CharField(max_length=20, blank= True, null= True,)
    categories5 = models.CharField(max_length=20, blank= True, null= True,)
    parent_userid =  models.ForeignKey(SignupModel, on_delete=models.CASCADE, to_field='userid',  default='be5a6874-83f4-4c58-9c89-2b0918b3f874')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)


    