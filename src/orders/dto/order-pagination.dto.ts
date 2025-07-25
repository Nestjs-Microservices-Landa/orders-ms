import { IsEnum, IsOptional } from "class-validator";
import { OrderStatusList } from "../enums/order.enum";
import { PaginationDto } from "src/common";
import { OrderStatus } from "@prisma/client";
import { Transform } from "class-transformer";

export class OrderPaginationDto extends PaginationDto {
    @IsOptional()
    @Transform(({ value }) => value?.toUpperCase())
    @IsEnum(OrderStatusList, {
        message: `Possible values are: ${OrderStatusList}`,
    })
    status: OrderStatus;
}