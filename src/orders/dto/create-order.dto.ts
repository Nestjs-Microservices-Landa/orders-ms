import { OrderStatus } from '@prisma/client';
import { OrderStatusList } from '../enums/order.enum';
import {
  IsEnum,
  IsNumber,
  IsPositive,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  tortalAmount: number;

  @IsNumber()
  @IsPositive()
  totalItems: number;

  @IsEnum(OrderStatusList, {
    message: `Posible values are: ${OrderStatusList.join(', ')}`,
  })
  @IsOptional()
  status: OrderStatus = OrderStatus.PENDING;

  @IsBoolean()
  @IsOptional()
  paid: boolean = false;
}
