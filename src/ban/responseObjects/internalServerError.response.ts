import { ApiProperty } from "@nestjs/swagger";

export class InternalServerErrorResponseObj {
    
    @ApiProperty({
        description: 'Codice di errore.',
        example: 500
    })
    statusCode: number;

    @ApiProperty({
        description: 'Messaggio di errore',
        example: "Internal server error"
    })
    message: string;
}