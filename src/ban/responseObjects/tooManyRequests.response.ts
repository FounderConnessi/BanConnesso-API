import { ApiProperty } from "@nestjs/swagger";

export class TooManyReqsResponseObj {
    
    @ApiProperty({
        description: 'Codice di errore.',
        example: 429
    })
    statusCode: number;

    @ApiProperty({
        description: 'Messaggio di errore',
        example: "ThrottlerException: Too Many Requests",
    })
    message: string
}