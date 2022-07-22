from django.db import models


class Advert(models.Model):
    title = models.CharField("Title", max_length=1000)
    description = models.TextField("Description", blank=True)
    price = models.IntegerField("Price")
    image = models.ImageField(upload_to="adverts", verbose_name="image", default="photo")
    link = models.URLField("Link", blank=True)

    def __str__(self):
        return self.title
