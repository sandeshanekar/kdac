# AWS

## create ec2 instance

    - login to aws.amazon.com
    - please please please make sure that you are in Mumbai region
    - select ec2 (elastic cloud compute)
    - properties
    - name: my-test-server
    - AMI: ubuntu 22.04 server (LTS)
    - instant type: t2.micro
    - key pair: create a new key pair
        - name: my-test-server
        - type: RSA
        - file format: .pem
        - once you create the pem file, it will download the file in the ~/Downloads directory
        - please please please keep this file safe

## connecting the ec2 intance

- grab the public ip address from management console

```bash

# change the pem file permissions
> chmod 400 ~/Downloads/my-test-server.pem

# connect to the server
> ssh -i ~/Downloads/my-test-server.pem ubuntu@<public ip>
# > ssh -i my-test-server.pem ubuntu@15.206.178.34

```

## configure the server

```bash

# update aptitude sources
> sudo apt-get update

# install mysql server
> sudo apt-get install mysql-server

# install apache
> sudo apt-get install apache2

# install node 18.x
> curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
> sudo apt-get install nodejs

# confirm the node version
> node -v

```

## opening required ports

- select the ec2 instance
- select security (2nd option)
- select security (firewall) groups (select the one which has launch-wizardxxx)
- click the button "Edit Inbound Rules"
- click "Add rule"
  - port range: 80
  - source: Anywhere/ipv4 (0.0.0.0/0)
  - save the rul
- copy the public ip address in the browser to confirm the website visibility

## host a simple website with one page

```bash

# go to the apache hosting directory
> cd /var/www/html

# remove the existing file
> sudo rm index.html

# open the file index.html
> sudo vim index.html

```
