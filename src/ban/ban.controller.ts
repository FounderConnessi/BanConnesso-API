import { Body, Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { BanService } from './ban.service';
import { UserDto,  UsersDto } from './dto';
import { UserResponseObject, UsersResponseObject } from './responseObjects';

@ApiTags('ban')
@Controller('ban')
export class BanController {

  constructor(private readonly banService: BanService) { }

  @ApiOperation({ 
    summary: 'Restituisce la lista degli utenti bannati.' 
  })
  @ApiOkResponse({
    description: 'OK',
    type: UsersResponseObject,
    isArray: true
  })
  @Get("users")
  getBans(@Body() dto?: UsersDto) {
    return this.banService.getBannedUsers(dto);
  }

  @ApiParam({
    name: 'uuid',
    required: false,
    description: "UUID dell'utente.",
    example: '3ad836d9-2f38-443c-831b-4c954096378f'
  })
  @ApiParam({
    name: 'nickname',
    required: false,
    description: "Nickname dell'utente.",
    example: 'MrFreasy'
  })
  @ApiOperation({ 
    summary: 'Restituisce le informazioni di uno specifico utente.' 
  })
  @ApiOkResponse({
    description: "Ok",
    type: UserResponseObject
  })
  @Get("user")
  getBan(@Query('uuid') uuid: string, @Query('nickname') nickname?: string, @Body() filterDto?: UserDto) {
    return this.banService.getBannedUser({ uuid, nickname }, filterDto);
  }
}
