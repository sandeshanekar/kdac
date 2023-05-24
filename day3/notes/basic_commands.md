# git

```bash

# initialize an empty repository
> git init

# check the status of every file in the working directory
> git status
> git status -s

# status
# ??: untracked file (the file is not yet added to the repository)
# A : this file is added to the staging area and will be added later (after commit) to the repository
#  M: the file is modified in the working directory. the file is not yet added to the staging area.
# M : the file is modified and added to the staging area

# add the file(s) or directories in the staging area
> git add <file name>

# add all the files and directories in the current directory
> git add .

# create a new version of the file(s) or directories present in staging area
# add a new version to the repository
> git commit -m <message>

# compare the current version of the file in working directory with a latest (lastg) version present in the repository
> git diff <file name>

# get all the commits / logs
> git log

# remove the changes made in the working directory
# get the previous version restored
> git checkout <file>

# remove all the changes made to all the files in the working directory
# please please please never execute this command without knowing what you are doing
> git reset --hard

# bring the changes from staging area to the working directory [do not commit the changes]
# this is also known as soft reset because the soft reset does not remove the changes
> git reset


```
