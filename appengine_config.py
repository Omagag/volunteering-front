"""Module describing operations to be performed when new instances are instantiated.

.. moduleauthor:: Cristian Davis <cristiandavis.asensio.contractor@bbva.com>
.. versionadded:: 0.1.0
"""

import os
import sys

from google.appengine.ext import vendor
from google.appengine.api.modules import modules

sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'lib'))
vendor.add('lib')


def namespace_manager_default_namespace_for_request():

    """Overrides the default namespace with the current App Engine's module name."""

    return modules.get_current_module_name()
