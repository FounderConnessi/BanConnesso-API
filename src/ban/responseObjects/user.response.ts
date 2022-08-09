import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { UserModel } from "./user.model";


export class UserResponseObj {
    

    @ApiProperty({
        description: 'Indica se l\'utente è bannato.',
        example: true
    })
    banned: boolean

    @ApiPropertyOptional({
        description: 'Informazioni dell\'utente bannato.',
        type: UserModel
    })
    user: UserModel;

    @ApiProperty({
        description: 'Hash generato (SHA1)',
        example: "8c4b5c0742eb3bfbb03891838d11899929a77106",
        type: "string | null"
    })
    hashCode: String
}