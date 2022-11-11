import { ApiPropertyOptional } from "@nestjs/swagger";
import { Gravity } from "@prisma/client";
import { IsArray, IsOptional } from "class-validator";

export class FiltersDto {

    @ApiPropertyOptional({
        description: 'Gravità del ban.',
        type: "Gravity[]",
        example: [
            Gravity.LOW, Gravity.MEDIUM
        ],
        enum: [Gravity.LOW, Gravity.MEDIUM, Gravity.HIGH]
    })
    @IsOptional()
    @IsArray()
    gravities?: string[];
}