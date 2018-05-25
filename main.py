"""Module describing creation of flask applications.

.. moduleauthor:: Cristian Davis <cristiandavis.asensio.contractor@bbva.com>
.. versionadded:: 0.1.0
"""

import logging
from datetime import timedelta

import flask
from fga.frameworks.flask import core as fga_core
from fga.frameworks.flask.core import BeforeRequestFlow
from fga.settings import properties

import config
import src
from src.blueprints.front import front_bp

app = None


def make_session_permanent():
    flask.session.permanent = True


def set_log_level():
    logging.getLogger().setLevel(logging.DEBUG if properties.environment_name() == 'dev' else logging.INFO)


def create_app():
    global app
    if app is None:
        app = fga_core.create_app(
            name=src.__name__,
            static_folder=None,
            instance_relative_config=True,
            connectors_before_request=BeforeRequestFlow(oauth_filter=False),
            multidomain_before_request=BeforeRequestFlow(oauth_filter=False)
        )

        app.config.from_object(config.get_config())
        app.config.from_pyfile('config.py', silent=True)

        app.register_blueprint(front_bp)

        # Set session lives for 12 hours
        app.before_request(make_session_permanent)
        app.permanent_session_lifetime = timedelta(hours=12)

        set_log_level()


create_app()
