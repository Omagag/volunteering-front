# BBVA FGA FRONT ANGULAR ARCHETYPE
_v3.3.3_

This document provides everything you need to start a new project based on this archetype.

# WARNING !!!

**This archetype does not work with versions of _fga-cli.py_ lower than 1.7.0**

## Prerequisites
* Google **DEV** account for DEV environment. `Section 4` of this [document][devUserRequest]
* _fga-cli.py_ installed on your system. [Here][fga-cli-install] you can find an installation guide 
* Authorized access to a Google Cloud Proyect. [Governance Cloud Platform][governance-model]

## Setup environment

### Create a project
You can create a back project using:

```bash
fga-cli.py create 'My Project Name'
```

Select a front application when prompted.

### Initialize project
First of all, you have to install all the dependencies and create everything you are going to need.
In order to achive this, you can use our cli _fga-cli.py_:

```bash
fga-cli.py install all
```

This command will install [virtualenv][virtualenv] and create a new one for you. Then it connects the just created virtualenv 
to our pypi repositories, installs all the local and vendor dependencies and lastly creates the instance config for your flask
app, i.e. _instances/config.py_. The instance config is a non-tracked file where you can specify your configuration _secrets_.

Finally, fill the _env.json_ file with the information of your project and write your package version located in _src/__init__.py_.
 
### Initialize Gcloud

Gcloud is a tool used for deployment and authentication.
In order to install this tool follow the instructions [here][gcloud-download]
Also, be sure to have the gcloud python components installed.

```bash
gcloud components list
```

If they are not installed just run:

```bash
gcloud components install app-engine-python
```

Once you have everything installed, let's initialize gcloud with your configuration.

```bash
gcloud init
```

### Configure environment

Fill in the env.json file with your project data. The project field must contain the 
project ID in the Google console. Fill in this data for each environment (dev, au and pro)

## CLI commands

### Run local environment

```bash
fga-cli.py run
```
Authorization will be requested to obtain the application's credentials. You must use an account at dev.bbva.com
You can pass any values to use in the templates rendering using named parameters. Example:
```bash
fga-cli.py run --example_key=example_value
```
Yaml templates will receive this value in a dictionary named parameters:
```yaml
{% if parameters['example_key'] == 'example_value' %}
service: default
{% else %}
service: another
{% endif %}
runtime: python27
api_version: 1
threadsafe: true
...
```
### Build docs

This archetype gives you an already configured sphinx to write your documentation. 
You can find all the configuration in the docs folder.
Also, you can rely on the _fga-cli.py_ to build the docs for you. Just run:

```bash
fga-cli.py build docs
```

### Deploy

To deploy your app you have several commands in the _fga-cli.py_ to help you out.
All the commands have their on help, just use:

```bash
fga-cli.py deploy -h
```

Just as example, you can run this command to deploy everything, i.e. app.yaml, dispatch.yaml, queue.yaml, cron.yaml, index.yaml and the properties, 
in the dev environment.

```bash
fga-cli.py deploy all --env=dev
```
You can pass any values to use in the templates rendering using named parameters. Example:
```bash
fga-cli.py deploy all --env=dev --example_key=example_value
```
Yaml templates will receive this value in a dictionary named parameters:
```yaml
{% if parameters['example_key'] == 'example_value' %}
service: default
{% else %}
service: another
{% endif %}
runtime: python27
api_version: 1
threadsafe: true
...
```
If you want to pass additional parameters to gcloud you can do it using the following syntax:

```bash
fga-cli.py deploy all --env=dev -- --no-promote --no-stop-previous-version
```
Any parameters after `--` will be passed to gcloud directly

Another thing to keep in mind is that the properties are deployed to your datastore using remote api.
This properties are going to be stored in the namespace defined by the name of you app's service.
If want to use any other namespace you can achive it specifying an environment variable 'PROPERTIES_NAMESPACE' in
the app.yaml. If you want to update your properties use the next command:

```bash
fga-cli.py deploy properties --env=dev
```

To deploy properties to other environments (AU, PRO), you must be sure that the corresponding project id is selected
in the Google Cloud SDK:

```bash
gcloud init
```
Authorization will be requested to obtain the application's credentials. The account to be used depends on the 
environment being deployed:
- For the DEV environment you must use a dev. bbva. com account
- For AU and PRO environments you must use a bbva. com account

## Features

### FGA

This archetype includes the Framework for Google Applications (FGA). You can read its
documentation [here][fga-docs].

### Structure

The next section documents the directory layout:

* resources: configuration files by environment of the applicaton.
* src: python module code (Front-back component)
* webapp: front angular application.
    * assets: static files;
    * segments: root page.
    * settings: application configuration.

### Session

By default, app require user login. You can find data about the current logged user in constant `userSession`.
In addition to this, you can retrieve the current environment in constant `environment` (dev | au | pro).

### How to use User Roles

#### Configure Roles

Inside the folder resources we have enviroments, so please select your enviroment and add the next property in `properties.yaml`

```yaml
soyo:
  roles: True
```

#### Get Roles

Find roles inside the constant `userSession.soyoRoles`.

### How to use Connectors

For making requests to some API or your back, use the property `connector_uri` in `properties.yaml` and 
use `/c` at the beginning of the path. Connector uris work as an alias. If the given path is in the list of 
the connector uris properties, perform an OAuth2 call to the associated property url.

By default, connector is enable with gateway (All request to some GCP API should be done through gateway), 
but add more if you need. 

```yaml
connector_uris: s
s: https://dev-bbva-gateway.appspot.com
```

With the previous configuration, if you want to make a request to `/v3/files` service of [GDrive][gdrive] 
(https://dev-bbva-gateway.appspot.com/gdrive/v3/files) use next url

```text
https://<my-proyect>.appspot.com/c/s/gdrive/v3/files
```

If you need to connect with another target, you can add more url separated by `,`

```yaml
connector_uris: s, othertarget
s: https://dev-bbva-gateway.appspot.com
othertarget: https://another-api.appspot.com
```

## Versioning Rules

Given a version number MAJOR.MINOR.PATCH, increment the:

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
Snapshot versions should have '-SNAPSHOT' suffix.

For more information, see [SemVer][semVer]

## Support

For any problem or bug, please contact with [BBVA Google Cloud Platform Team](mailto:gcp.team@bbva.com)

[devUserRequest]: https://docs.google.com/document/d/1tBKbiNOKQ152z1twCY-40V8NXQ4BOI-pqeLffu2HC4k/edit
[fga-cli-install]: https://bbva-devplatform.appspot.com/en-us/developers/engines/gcp/documentation/technical-documentation/appengine/python-archetypes
[fga-docs]: https://developer:S7Wn1CiNP4@frontydispositivos.com/nexus3/repository/documentation/pyfga/2.0.3/
[gdrive]: https://dev-bbva-gapis-viewer.appspot.com/#/api/gdriveV3/
[governance-model]: https://docs.google.com/document/d/1bi-EGpN_uahyP7cRzPi-yNtb0e8vvAWwwEWxUPp_j0A/edit
[semVer]:http://semver.org/
[virtualenv]: https://virtualenv.pypa.io/en/stable/
