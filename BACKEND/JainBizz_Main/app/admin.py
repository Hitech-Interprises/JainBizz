from django.contrib import admin
from .models import *


class SignupModelAdmin(admin.ModelAdmin):
    list_display = ('usertype','fullname', 'email' , 'mobile', 'password' )
admin.site.register(SignupModel, SignupModelAdmin)

admin.site.register(BussinessDetails_db)

class CategoryModelsAdmin(admin.ModelAdmin):
    list_display = ('cate_id','name', 'image' , 'description', 'parent_category' )
admin.site.register(CategoryModels, CategoryModelsAdmin)

class SizeModelsAdmin(admin.ModelAdmin):
    list_display = ('size_id','size_type', 'created_at' , 'updated_at')
admin.site.register(Sizes, SizeModelsAdmin)

class Measurement_UnitsModelsAdmin(admin.ModelAdmin):
    list_display = ('measurement_id','units','created_at' , 'updated_at' )
admin.site.register(Measurement_UnitsModels, Measurement_UnitsModelsAdmin)


class ProductsModelsAdmin(admin.ModelAdmin):
    list_display = ('product_id','product_name','features','short_description','description','warranty_information','additional_information','sizes','offers','sku','categories1','categories2','categories3','categories4',
'categories5',
'categories6',
'categories7',
'categories8',
'categories9',
'price',
'images1',
'images2',
'images3',
'images4',
'images5',
'variants',
'brand',
'specifications',
'reviews_ratings',
'date',
'related_products',
'product_link',
'product_options',
'product_availability',
'productweight_dimensions',
'measurement_units',
'assembly_installation',
'others_deatils',
'parent_userid',
'created_at',
'updated_at',)
admin.site.register(AllProducts_db)
admin.site.register(AllService_db)

