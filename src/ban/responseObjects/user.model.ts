import { ApiPropertyOptional } from "@nestjs/swagger";
import { Gravity } from "@prisma/client";


export class UserModel {
    
    @ApiPropertyOptional({
        description: 'UUID dell\'utente.',
        example: "3ad836d9-2f38-443c-831b-4c954096378f"
    })
    uuid: string;

    @ApiPropertyOptional({
        description: 'Nickname dell\'utente.',
        example: "MrFreasy"
    })
    nickname: boolean;

    @ApiPropertyOptional({
        description: 'Data di inizio ban.',
        example: "2022-08-06T17:07:23.637Z"
    })
    startDate: Date

    @ApiPropertyOptional({
        description: 'Gravità del ban',
        example: "LOW",
        enum: [ Gravity.LOW, Gravity.MEDIUM, Gravity.HIGH ]
    })
    gravity: Gravity

    @ApiPropertyOptional({
        description: 'Motivo del ban.',
        example: "Chargeback"
    })
    reason: string
}