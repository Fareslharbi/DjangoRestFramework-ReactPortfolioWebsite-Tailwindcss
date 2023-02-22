from django.db import models
from pathlib import Path

import os
import datetime
class Education(models.Model):
    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    years = models.CharField(max_length=25)
    description = models.TextField()
    ordinal = models.IntegerField()


class Work(models.Model):
    company = models.CharField(max_length=255)
    job_des = models.CharField(max_length=255, default='')
    years = models.CharField(max_length=25)
    description = models.TextField()
    ordinal = models.IntegerField()


def filepath(request, filename):
    old_filename = filename
    timeNow = datetime.datetime.now().strftime("%Y%m%d%H:%M:%S")
    filename = "%s%s" % (timeNow, old_filename)
    return os.path.join('uploads/', filename)
class Portfolio(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to=filepath, null=True, blank=True)
    url = models.URLField()
    ordinal = models.IntegerField()
