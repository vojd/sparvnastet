from django.conf.urls import patterns, include, url

from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

admin.autodiscover()
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^/', include('sparvnastet.apps.pages.urls')),
    url(r'^secretadminplace/', include(admin.site.urls)),
)


urlpatterns += staticfiles_urlpatterns()
