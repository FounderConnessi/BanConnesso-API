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

    @ApiProperty({
        description: 'Hash generato (SHA1)',
        example: "661f5d5838ef0bfcd8a956a2fe0b7a560966e63f",
        type: "string | null"
    })
    hashCode: String
}