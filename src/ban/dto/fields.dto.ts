import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsBoolean, IsOptional } from "class-validator";


export class FieldsDto {
    
    @ApiPropertyOptional({
        description: 'UUID dell\'utente.',
        example: true,
        default: true
    })
    @IsOptional()
    @IsBoolean()
    uuid?: boolean;

    @ApiPropertyOptional({
        description: 'Nickname dell\'utente.',
        example: true,
        default: true
    })
    @IsOptional()
    @IsBoolean()
    nickname?: boolean;

    @ApiPropertyOptional({
        description: 'Data del ban.',
        example: false,
        default: true
    })
    @IsOptional()
    @IsBoolean()
    startDate?: boolean;

    @ApiPropertyOptional({
        description: 'Motivo del ban.',
        example: true,
        default: true
    })
    @IsOptional()
    @IsBoolean()
    reason?: boolean;

    @ApiPropertyOptional({
        description: 'Gravità del ban.',
        example: false,
        default: true
    })
    @IsOptional()
    @IsBoolean()
    gravity?: boolean;
}