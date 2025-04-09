from django.db import models

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
    

class Article(models.Model):
    title = models.CharField(max_length=100)
    faculty = models.CharField(max_length=100, blank=True)
    text = models.TextField()
    yers = models.CharField(max_length=20)

    def __str__(self):
        return self.name