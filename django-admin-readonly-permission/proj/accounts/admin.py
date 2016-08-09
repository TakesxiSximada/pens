from django.contrib import admin

from . import models


class ReadonlyAdmin(admin.ModelAdmin):
    def has_add_permission(self, *args, **kwds):
        return False

    def has_delete_permission(self, *args, **kwds):
        return False

    def has_change_permission(self, *args, **kwds):
        return True

    def has_module_permission(self, *args, **kwds):
        return True

    def save_model(self, *args, **kwds):
        raise ValueError('Not allowed operation: save')

    def delete_model(self, *args, **kwds):
        raise ValueError('Not allowed operation: delete')

    def get_actions(self, *args, **kwds):
        return []

    def changeform_view(self, request, object_id=None, form_url='', extra_context=None):
        extra_context = extra_context or {}
        extra_context['show_save'] = False
        extra_context['show_save_and_continue'] = False
        return super(ReadonlyAdmin, self).changeform_view(
            request, object_id, form_url, extra_context)

admin.site.register(models.Account, ReadonlyAdmin)
