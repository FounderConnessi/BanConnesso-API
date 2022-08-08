import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { FieldsDto } from "./fields.dto";


export class UserDto {
    
    @ApiPropertyOptional({
        description: 'Mostra o nascondi alcuni campi dell\'utente.',
        type: FieldsDto
    })
    @IsOptional()
    fields?: FieldsDto;
}