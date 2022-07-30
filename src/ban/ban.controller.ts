import { Body, Controller, Get, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { BanService } from './ban.service';
import { GetUserDto } from './dto';

@Controller('bans')
export class BanController {

    constructor(private readonly banService : BanService){}

    @Get()
    getBans(){
        return this.banService.getBannedUsers();
    }

    @Get()
    getBan(@Body() dto: GetUserDto){
        return this.banService.getBannedUser(dto);
    }
}
