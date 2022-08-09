import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { UserModel } from "./user.model";


export class UsersResponseObj {
    

    @ApiProperty({
        description: 'Numero di utenti bannati.',
        example: 1
    })
    count: number

    @ApiPropertyOptional({
        description: 'Informazioni dell\'utente bannato.',
        type: UserModel,
        isArray: true
    })
    users: UserModel[];
}