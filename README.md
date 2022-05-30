# How to start the full application



## Prerequisites

- Node
- Docker


## Start the application

```bash
#Start the mongo db via docker (docker deamon has to be running)
docker-compose -f ./uni-mongodb/mongo-express.yml up -d
```
```bash
#Start the backend
node ./uni-backend/index.js 
```
```bash
#Start the frontend
cd uni-frontend
npm install
npm start
```