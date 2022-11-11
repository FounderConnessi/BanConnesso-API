import { ApiProperty } from "@nestjs/swagger";

export class BadUserRequestResponseObj {
    
    @ApiProperty({
        description: 'Codice di errore.',
        example: 400
    })
    statusCode: number;

    @ApiProperty({
        description: 'Messaggio di errore',
        example: [ "uuid must be a UUID" ],
        type: "string | string[]"
    })
    message: string[];

    @ApiProperty({
        description: 'Nome dell\'errore',
        example: "Bad Request"
    })
    error: string
}