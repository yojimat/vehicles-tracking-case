import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { MapsModule } from 'src/maps/maps.module';
import { RoutesDriverService } from './routes-driver/routes-driver.service';
import { RoutesWebsocketGateway } from './routes-websocket/routes-websocket.gateway';
import { BullModule } from '@nestjs/bull';
import NewPointsJob from './new-points.job';
import { ClientsModule, Transport } from '@nestjs/microservices';
import RouteKafkaProducerJob from './kafka-producer.job';
import { makeCounterProvider } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    MapsModule,
    BullModule.registerQueue(
      { name: 'new-points' },
      { name: 'kafka-producer' },
    ),
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'nest',
            brokers: ['127.0.0.1:9094'],
          },
        },
      },
    ]),
  ],
  controllers: [RoutesController],
  providers: [
    RoutesService,
    RoutesDriverService,
    RoutesWebsocketGateway,
    NewPointsJob,
    RouteKafkaProducerJob,
    makeCounterProvider({
      name: 'route_started_counter',
      help: 'Number of routes started',
    }),
    makeCounterProvider({
      name: 'route_finished_counter',
      help: 'Number of routes started',
    }),
  ],
})
export class RoutesModule {}
