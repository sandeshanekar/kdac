# kubernetes

- install minikube

```bash

# documentation
> https://kubernetes.io/docs/home/

# download the installer
> curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

# install the minikube
> sudo install minikube-linux-amd64 /usr/local/bin/minikube

# start the minikube cluster
> minikube start

# create an alias
> alias kubectl="minikube kubectl --"

# check the status of minikube
> minikube status

# start the kubernetes dashboard
> minikube dashboard

```

## pod related commands

```bash

# get the list of pods
> kubectl get pods

# create a directory and put the pod configuration in yaml format in a file (pod1.yaml)
> kubectl create -f <file name>
> kubectl create -f pod1.yaml

# get selected pod's information
# > kubectl describe <type> <name>
> kubectl describe pod pod1

# delete an entity
> kubectl delete <type> <name>
> kubectl delete pod pod1

```

## replica set

```bash

# get all replica sets
> kubectl get replicasets
> kubectl get rs

# get the details
> kubectl describe rs rs1

```

## visual studio code

- press keys: ctrl + alt + p
- search for: open user settings (JSON)
- insert the following snippet

```json
  "editor.tabSize": 4,
  "editor.insertSpaces": true,
  "editor.detectIndentation": true
```

- install extension for kubernetes
