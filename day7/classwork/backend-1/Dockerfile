FROM node

# set the working directory
# image will will set it as working directory
# WORKDIR /src

# copy all the contents of your application
# copy everything in the current working directory from my machine 
# to the working directory of image (WORKDIR: line #5)
# create a new directory /src if it does not exist
COPY . .

# expose a port for external entities
EXPOSE 3000

# execute the application when the container starts
# every docker image must contain one and only one CMD command
CMD node server.js
# CMD ["node", "server.js"]