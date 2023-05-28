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

## start preparing the database

- one time configuration

```bash

# start mysql with root previleges
> sudo mysql

# change the root user password
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

# flush privileges
mysql> FLUSH PRIVILEGES;

# exit from mysql console
> exit

```

- create the db schema

```bash

# login with root
> mysql -u root -p

# execute the queries

```

## configure the backend (express)

- execute these commands on your local machine

```bash

# archive the backend code
> tar -cf backend.tar <backend code directory>

# > cd /Volumes/MyData/sunbeam/sdm/day/classwork
# > tar -cf backend.tar server
# when you execute this command, it will create tar file named backend.tar


# upload the backend.tar to the aws vm
> scp -i <pem file path> <source file> <user>@<public ip>:<path>
# > scp -i /tmp/my-test-server.pem backend.tar ubuntu@43.204.97.93:/home/ubuntu/

```

- execute the following commands on the aws vm

```bash

# first connect to the aws vm from your machine
# > ssh -i <pem file> ubuntu@<public ip>

# make sure the backed.tar file exists on the /home/ubuntu path
> cd /home/ubuntu
> ls -l
# it should show you the file backend.tar

# unarchive the backend.tar file
> tar -xf backend.tar
# this should create the server directory in /home/ubuntu path

# install a package to run the node server in background
# pm2 -> process manager: used to run node applications in background
> sudo npm install -g pm2

# start your express server
> cd server
> pm2 start server.js

# verify the server is running successfully
> pm2 list

# stop the running server
> pm2 stop <id of the process>
# pm2 stop 0

# restart the server
> pm2 restart <id of the process>
# pm2 restart 0

# enable the port number 4000 (server is running on this port)
# for more information please visit line no #56

```
