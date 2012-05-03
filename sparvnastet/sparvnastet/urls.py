import os
from django.contrib import admin
from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic.simple import direct_to_template
from sparvnastet.apps.pages.views import PageView

DIRNAME = os.path.dirname(__file__)

admin.autodiscover()

urlpatterns = patterns('',
    #url(r'^/', include('sparvnastet.apps.pages.urls')),

    url(r'^secretadminplace/', include(admin.site.urls)),
    (r'^media/(?P<path>.*)$', 'django.views.static.serve',
     {'document_root': os.path.join(DIRNAME, "media"), 'show_indexes': True }),
    url(r'^p/(?P<slug>[-\w]*)/$', PageView.as_view(), name="page_view"),
    ('^404/$', direct_to_template, {'template': '404.html'})
)

urlpatterns += staticfiles_urlpatterns()
