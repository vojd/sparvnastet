from django.contrib import admin
from sparvnastet.apps.pages.models import Page, Category

__author__ = 'mathias'


from django.contrib.admin.sites import site

class PageAdmin(admin.ModelAdmin):
    #exclude = ['created',  ]
    pass

site.register(Page, PageAdmin)
site.register(Category)