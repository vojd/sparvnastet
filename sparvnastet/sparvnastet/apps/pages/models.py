# -*-coding:utf8 -*-
from django.core.urlresolvers import reverse
from sparvnastet.settings.default import UPLOAD_DIR


__author__ = 'mathias'
from django.db import models
from django.utils.translation import ugettext as _
from tagging.fields import TagField

class Page(models.Model):
    """ Represents a blog page """
    title = models.CharField(max_length=255, verbose_name=_('title'))
    slug = models.SlugField(max_length=255, verbose_name=_('slug'))
    content = models.TextField(verbose_name=_('content'))
    category = models.ForeignKey('Category')
    published = models.BooleanField(default=False)
    tags = TagField(verbose_name=_('tags'))
    created = models.DateTimeField(verbose_name=_('created'), auto_now_add=True)
    modified = models.DateTimeField(verbose_name=_('modified'), auto_now=True)

    def get_absolute_url(self):
        return u'/p/%s' % self.slug

    def __unicode__(self):
        return u"%s" % self.title

class Category(models.Model):
    name = models.CharField(max_length=75, verbose_name=_('category'))
    order = models.IntegerField(verbose_name=_('ordering'), default=0)

    def __unicode__(self):
        return u"%s" % self.name

class Image(models.Model):
    image = models.ImageField(upload_to=UPLOAD_DIR, verbose_name=_('image'))

    def __unicode__(self):
        return u"%s" % self.image