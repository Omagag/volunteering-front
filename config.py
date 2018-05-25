"""Module describing default flask application configuration.

.. moduleauthor:: Cristian Davis <cristiandavis.asensio.contractor@bbva.com>
.. versionadded:: 0.1.0
"""

from fga.settings import properties


class Config(object):

    """Class to describe the base configuration for the flask app."""

    DEBUG = False
    TESTING = False
    MAPPER_METHODS = ['GET', 'POST', 'PUT', 'DELETE']


class TestingConfig(Config):

    """Class to describe the testing environment configuration for the flask app."""

    TESTING = True
    DEBUG = True


class DevelopmentConfig(Config):

    """Class to describe the development environment configuration for the flask app."""

    DEBUG = True
    SECRET_KEY = 'dev'


class UserApproval(Config):

    """Class to describe the user approval environment configuration for the flask app."""

    DEBUG = True


class ProductionConfig(Config):

    """Class to describe the production environment configuration for the flask app."""

    pass


def get_config():

    """Gets the configuration base on the current enviroment.

    Returns:
        (:class:`subclass of Config`): The current environment configuration class.
    """

    env = properties.environment_name().lower()
    if env == 'testing':
        return TestingConfig
    elif env == 'dev':
        return DevelopmentConfig
    elif env == 'au':
        return UserApproval
    elif env == 'pro':
        return ProductionConfig
    else:
        raise EnvironmentError('Unknown environment!')
