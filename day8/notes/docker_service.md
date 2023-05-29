# docker

```bash

# register an account on dockerhub (https://hub.docker.com/)

# login with the docker account
> docker login

# logout from docker
> docker logout

# to upload a docker image, the image name must be in the form
# - <account name or user name>/<image name>
# > docker image build -t pythoncpp/mywebsite .

# push the image to dockerhub
> docker image push <image name with user name>
# > docker image push pythoncpp/mywebsite

```
