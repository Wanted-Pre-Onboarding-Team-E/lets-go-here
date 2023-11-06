import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from '../../entity/restaurant.entity';
import { RestaurantLib } from './restaurant.lib';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant])],
  controllers: [RestaurantController],
  providers: [RestaurantService, RestaurantLib],
  exports: [RestaurantLib, RestaurantService],
})
export class RestaurantModule {}
