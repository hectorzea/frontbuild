## Motivation of the project

Frontend project build task creator with the possibility of adding different backends all dockerized

![alt text](image.png)

## Installation with docker

If you have docker just run the following comand in the /frontbuild folder

``docker compose up``

this command will install generate the following images

- frontbuild-frontend (nextjs build)
- frontbuild-backend (node js express build)
- mongo (mongo image)

when the installation is finished you can check in docker the container for the composed stack running the 3 containers based on those images


## Frontend

For frontend see the [frontend](./frontend) folder.

## Backend

For backend see the [backend](./backend) folder.

