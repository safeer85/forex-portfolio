from django.db import models

class Portfolio(models.Model):
    currentBalance = models.FloatField(default=0)
    equity = models.FloatField(default=0)

    def __str__(self):
        return f"Portfolio Balance: {self.currentBalance}, Equity: {self.equity}"
