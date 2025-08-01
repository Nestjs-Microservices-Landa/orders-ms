import { IsEnum, IsUUID } from "class-validator";
import { OrderStatusList } from "../enums/order.enum";
import { OrderStatus } from "@prisma/client";

export class ChangeOrderStatusDto{
    @IsUUID(4)
    id: string;

    @IsEnum(OrderStatusList, {
        message: `Possible values are: ${OrderStatusList}`
    })
    status: OrderStatus;
}