# custom image

```bash

# to use the docker commands intellisense
# install extension named docker (official microsoft extension)

# create a new directory
> mkdir new-image
> cd new-image

# create a new file named Dockerfile
# add the required instructions for creating custom image

# build the image
# please make sure that you are in the same directory as that of the Dockerfile
> docker image build -t <image name> .
# > docker image build -t myimage .

```
