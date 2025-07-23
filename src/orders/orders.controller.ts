import { Controller, ParseUUIDPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern('createOrder')
  create(@Payload() createOrderDto: CreateOrderDto) {
    console.log('Microservicio: createOrder recibido', createOrderDto);
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern('findAllOrders')
  findAll() {
    return this.ordersService.findAll();
  }

  @MessagePattern('findOneOrder')
  findOne(@Payload('id', ParseUUIDPipe ) id: string) {
    return this.ordersService.findOne(id);
  }

  @MessagePattern('chanfgeOrderStatus')
  changeOrderStatus() {
    throw new Error('Method not implemented.');
  }
}
