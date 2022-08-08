import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsOptional } from "class-validator";


export class FieldsDto {
    
    @ApiPropertyOptional({
        description: 'UUID dell\'utente.',
        example: true
    })
    @IsOptional()
    @IsBoolean()
    uuid?: boolean;

    @ApiPropertyOptional({
        description: 'Nickname dell\'utente.',
        example: true
    })
    @IsOptional()
    @IsBoolean()
    nickname?: boolean;

    @ApiPropertyOptional({
        description: 'Data del ban.',
        example: true
    })
    @IsOptional()
    @IsBoolean()
    startDate?: boolean;

    @ApiPropertyOptional({
        description: 'Motivo del ban.',
        example: true
    })
    @IsOptional()
    @IsBoolean()
    reason?: boolean;

    @ApiPropertyOptional({
        description: 'Gravità del ban.',
        example: true
    })
    @IsOptional()
    @IsBoolean()
    gravity?: boolean;
}