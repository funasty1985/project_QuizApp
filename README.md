# quizApp


### Basic Git Operation ###
Check git status
> git status

stages changes 
> git add .

commit changes
> git commit -m "whatever"

pull code from github
> git pull <github repo url> <branch name>
    eg:
        > git pull origin master

push code to github
> git push <github repo url> <branch name>


## How to create a git branch ##

- list all branch
> git branch
(the one with a * is the current branch)

- check out the master and pull code from origin
> git checkout master
> git pull origin master

- create a new branch from the master branch 
> git checkout -b frontendInit

## local commiting new branch and push code to github 
> git add .
> git commit -m "what ever message"
> git push origin <new branch name>

## send pull request ## 
PERFORMING IN GITHUB ui

## build the angular app ##
> cd client
> ng build ( ./client/dis folder willl be created)
> swa deploy ./client --env production


##### Dockerization exmaple #########
https://medium.com/bb-tutorials-and-thoughts/how-to-dockerize-mean-stack-522796563573


#### Basic docker command ####
list images
> docker images

List all the containers
> docker container ls

check for runnng container
> docker ps 

Stop a docker container process 
> docker stop <container name>

Remove a docker container by name
> docker stop <container name>

build image according to a Dockerfile (at the path where Dockerfile is located)
> docker build -t project-image .

Run an image with a designated name 
> docker run -d -p 3080:3080 --name <process name> <image name>
    eg. docker run -d -p 3080:3080 --name project-run project-image 

##################################

deploy to docker image to azure 
az acr build --image project/web-app:v1 --registry lianbfusi .

login azure acr 
sudo az acr login -n lianbfusi

pull the image from repository
docker pull lianbfusi.azurecr.io/project/web-app:v1

enable admin 
az acr update -n lianbfusi --admin-enabled true


#######################################
How to start servers locally 

start backend server
> cd backend 
> npm run start

start frondend (Angular) server
> cd frontend
> npm run start