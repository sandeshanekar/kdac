# git

## one time configuration

```bash

# get all the global settings
> git config --global --list

# set the global configuration
> git config --global user.name <user name>
> git config --global user.email <user email>
# these configurations are stored in a file named .gitconfig in user's home directory

# check the configuration by opening of ~/.gitconfig
> cat ~/.gitconfig

```

## branch

```bash

# get the commit logs
> git log

# get the commit logs in one line per log
> git log --oneline
# it contains commit id, the branch name and message

# get the graph in the commits
> git log --graph

# create an alias for the git log
> alias gitl="git log --oneline --graph --color"

# create a new branch
# this branch will be created from main
# the main branch will be set as parent branch for b1
> git branch b1

# delete a branch
> git branch -d <branch name>

# create a new branch and checkout immediately
> git checkout -b <new branch name>

```

## git remote

```bash

# get the remote repository link
> git remote -v

# add remote repository
> git remote add <alias> <remote repo link>

# push the changes
> git push <alias> <branch name>

```
