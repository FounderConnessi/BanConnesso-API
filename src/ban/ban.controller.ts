import { Body, Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BanService } from './ban.service';
import { UserQuery, UserDto,  UsersDto } from './dto';
import { UserResponseObject, UsersResponseObject } from './responseObjects';

@ApiTags('ban')
@Controller('ban')
export class BanController {

  constructor(private readonly banService: BanService) { }

  @ApiOperation({ 
    summary: 'Restituisce la lista degli utenti bannati.' 
  })
  @ApiOkResponse({
    description: "Ok",
    type: UsersResponseObject,
  })
  @Get("users")
  getBans(@Body() dto?: UsersDto) {
    return this.banService.getBannedUsers(dto);
  }


  @ApiOperation({ 
    summary: 'Restituisce le informazioni di uno specifico utente.' 
  })
  @ApiOkResponse({
    description: "Ok",
    type: UserResponseObject
  })
  @Get("user")
  getBan(@Query() userQuery: UserQuery, @Body() userDto?: UserDto) {
    return this.banService.getBannedUser(userQuery, userDto);
  }
}
