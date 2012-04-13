from sparvnastet.apps.pages.models import Page

__author__ = 'mathias'
from django.views.generic.detail import DetailView

from django.http import HttpResponse
from django.views.generic.base import TemplateView
from django.views.generic.edit import UpdateView, FormView
from sparvnastet.apps.pages.snippets import render_block_to_string

class AjaxTemplateView(TemplateView):

    request_is_ajax = False
    block_to_render = 'article' # defaults to this template block

    def set_block_to_render(self, block_to_render):
        self.block_to_render = block_to_render

    def get_context_data(self, **kwargs):
        self.slug = kwargs.get('slug')
        context = super(AjaxTemplateView, self).get_context_data(**kwargs)
        if self.request.is_ajax():
            self.request_is_ajax = True
        context['request_is_ajax'] = self.request_is_ajax
        #print 'get_context_data', context['request_is_ajax']
        return context

    def get_template_names(self):

        if self.template_name is not None:
            return self.template_name

        if self.slug:
            template_name = u'%s.html' % self.slug
        else:
            template_name = u'page.html'
        return template_name

    def render_to_response(self, context, **response_kwargs):

        print "template " , self.get_template_names()
        if self.request_is_ajax:
            print "render ajax"
            return_str = render_block_to_string(
                self.get_template_names(),
                self.block_to_render,
                context
            )
            #print 'return_str', return_str
            return HttpResponse(return_str)
        print "render everything", self.get_template_names()
        return self.response_class(
            request = self.request,
            template = self.get_template_names(),
            context = context,
            **response_kwargs
        )

class PageView(AjaxTemplateView):
    # Display a shop page
    model = Page
    template_name = 'page.html'

