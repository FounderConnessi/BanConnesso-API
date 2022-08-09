import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID, ValidateIf } from "class-validator";

export class UserQuery {
    
    @ApiPropertyOptional({
        description: "UUID dell'utente.",
        example: '3ad836d9-2f38-443c-831b-4c954096378f'
    })
    @IsUUID()
    @ValidateIf(o => o.nickname == undefined || o.uuid)
    uuid?: String;

    @ApiPropertyOptional({
        description: "Nickname dell'utente.",
        example: 'MrFreasy'
    })
    @IsString()
    @IsNotEmpty()
    @ValidateIf(o => o.uuid == undefined || o.nickname)
    nickname?: String;
}