from django import forms
from .models import Realtor

class RealtorAdminForm(forms.ModelForm):
    class Meta:
        model = Realtor
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super(RealtorAdminForm, self).__init__(*args, **kwargs)

        # Check if the 'photo' field is empty
        if not self.instance.photo:
            self.initial['photo'] = 'https://i.stack.imgur.com/l60Hf.png'  # Set the default URL
