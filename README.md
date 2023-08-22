# Case: Tracking of vehicles
Projects in this repo will help create a platform of tracking of vehicles. The platform will be able to trace the vehicles in real time and store the trace in database. The platform will also be able to provide the tracking of vehicles to other applications.  
It will caculate vehicles fares based on the distance that the vehicles will travel.  
If the projects had CI/CD they should have their own repositories. Therefore, they could be deployed independently, by git webhooks or other tools.

## Architecture
![Tracking Vehicles Architecture](./images/tracking-vehicles-architecture.png "Tracking Vehicles Architecture")  

## Technologies
- [Docker](https://docs.docker.com/)
- [Go](https://go.dev/doc/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Next.js](https://nextjs.org/docs)
- [Nest.js](https://docs.nestjs.com/)
- [Prometheus](https://prometheus.io/docs/introduction/overview/)
- [Grafana](https://grafana.com/docs/grafana/latest/)
- [Apache Kafka](https://kafka.apache.org/documentation/)
- [MongoDB](https://docs.mongodb.com/)
- [Prisma ORM](https://www.prisma.io/docs/)
- [Google Maps API](https://developers.google.com/maps/documentation)

## Projects
### Vehicles Tracking Interface 
The **Next.js** framework show the interface of tracking of vehicles.   

### API
The **Nest.js** framework provide the API of tracking of vehicles and other features.  

#### Setup
Commands used to bootstrap the project.  
```bash
npm install -g @nestjs/cli
nest new nestjs-api
cd nestjs-api
npm install @prisma/client
npx prisma init #Change the .env file the prisma file.
npx prisma generate # This command must be executed with the db running.
npx nest generate module prisma
npx nest generate service prisma
npx nest generate resource # Create the CRUD of routes.
```

#### Usage
Using the API with Docker Compose:
```bash
cd nestjs-api
docker compose up
docker compose exec app bash
npm install 
npx prisma generate
npm run start:dev
```
Access http://localhost:3000/routes.  
There is a file at the root of the project that is called `api.http` that you can use to test the application with the plugin of VSCode called [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).  
When the request is made, Nest.js will consume the request/message and show it on the console.  
You can use Prisma Studio to see the data in the database.  
```bash
npx prisma studio
```

#### Test
```bash
# unit tests
$ npm run test
# e2e tests
$ npm run test:e2e
# test coverage
$ npm run test:cov
```

### Vehicles Fares Microservice
The microservice calculate the fares of vehicles based on the distance of the route, that the vehicles will travel.  

### Dashboards & System Metrics
The dashboards are made by the application Grafana and the metrics collected by Prometheus.  

## Authors and acknowledgment
Thanks to the professors of [full cycle course](https://github.com/devfullcycle/imersao14) that helped to create and bootstrap this project. 