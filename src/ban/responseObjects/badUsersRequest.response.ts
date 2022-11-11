import { ApiProperty } from "@nestjs/swagger";

export class BadUsersRequestResponseObj {
    
    @ApiProperty({
        description: 'Codice di errore.',
        example: 400
    })
    statusCode: number;

    @ApiProperty({
        description: 'Messaggio di errore',
        example: [ "gravity must be a boolean" ],
        type: "string | string[]"
    })
    message: string[];

    @ApiProperty({
        description: 'Nome dell\'errore',
        example: "Bad Request"
    })
    error: string
}