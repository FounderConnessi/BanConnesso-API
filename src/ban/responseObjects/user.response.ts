import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { UserModel } from "./user.model";


export class UserResponseObject {
    

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
}