# swarm

## swarm configuration

```bash

# check if the docker is a part of any swarm
> docker info
# check if the swarm status is active or inactive

# initialize a swarm
> docker swarm init

# leave the docker swarm (destroy the docker swarm)
> docker swarm leave --force

```

## node management

```bash

# get the list of nodes
> docker node ls

# get details of selected node
> docker node inspect <node id>

# remove a node
> docker node rm <node id>

```

## service management

```bash

# get the list of services
> docker service ls

# create a new service
> docker service create httpd

# create a new service with name
> docker service create --name myhttpd httpd

# create a new service with name and with 5 no of replicas
> docker service create --name myhttpd --replicas 5 httpd

# create a new service with name and with 5 no of replicas with port publishing
> docker service create --name myhttpd --replicas 5 -p 8080:80 httpd

# get the containers (processes) created by selected service
> docker service ps <service name or service id>

# scale out the service (increase the desired count)
> docker service scale <service name>=<new count>
# > docker service scale myhttpd=10

# remove the service
> docker service rm <service name or service id>

```
