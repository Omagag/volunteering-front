# -*- coding: utf-8 -*-

import flask
from fga.frameworks.flask.core import BeforeRequestFlow
from fga.settings import properties


front_bp = flask.Blueprint('front', __name__, static_folder='../web', template_folder='../web')
front_bp.before_request(BeforeRequestFlow(oauth_filter=False))

@front_bp.route('/', defaults={'path': ''})
@front_bp.route('/<path:path>')
def index(path):
    return flask.render_template(
        'index.html',
        title='Volunteering',
        session=flask.session['user_session'],
        environment=__load_environment()
    )
    
def __load_environment():
    return {
        'env': properties.environment_name()
    }
