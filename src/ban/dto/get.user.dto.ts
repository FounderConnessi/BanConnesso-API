import { IsNotEmpty, IsOptional, IsString, IsUUID, ValidateIf } from "class-validator";

export class GetUserDto {

    @IsUUID()
    @ValidateIf(o => !o.nickname || o.uuid)
    uuid: string;

    @IsString()
    @ValidateIf(o => !o.uuid || o.nickname)
    nickname?: string;
}