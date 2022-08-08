import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { FieldsDto } from "./fields.dto";
import { FilterDto } from "./filter.dto";


export class UsersDto {
    
    @ApiPropertyOptional({
        description: 'Mostra o nascondi alcuni campi degli utenti.',
        type: FieldsDto
    })
    @IsOptional()
    fields?: FieldsDto;

    @ApiPropertyOptional({
        description: 'Filtro sugli utenti.',
        type: FilterDto
    })
    @IsOptional()
    filter?: FilterDto;
}