import os
from django.contrib import admin
from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from sparvnastet.apps.pages.views import PageView

DIRNAME = os.path.dirname(__file__)

admin.autodiscover()

urlpatterns = patterns('',
    #url(r'^/', include('sparvnastet.apps.pages.urls')),
    url(r'^(?P<slug>[-\w]*)$', PageView.as_view(), name="page_view"),
    (r'^media/(?P<path>.*)$', 'django.views.static.serve',
         {'document_root': os.path.join(DIRNAME, "media"), 'show_indexes': True }),
    url(r'^secretadminplace/', include(admin.site.urls)),
)


urlpatterns += staticfiles_urlpatterns()
