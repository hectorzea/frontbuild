to run this project locally pointing we need to activate mongodb container, for that we can run

we use swagger-docjs to export types to frontend

# to run a new container with mongobd locally

docker run --name mongodb -p 27017:27017 -d mongo 

# to run application

Note: remember to run mongodb container first from image, this is just for testing the backend locally

npm run dev 

if you navigate to http://localhost:8080/api/tasks you should get the list of tasks

# to see swagger api docs

http://localhost:8080/api-docs/

# to generate swagger_output.json

```bash
npm run generate-swagger
```