import { Body, Controller, Get, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BanService } from './ban.service';
import { UserQuery, UserDto,  UsersDto } from './dto';
import { UserResponseObj, UsersResponseObj } from './responseObjects';
import { BadRequestResponseObj, InternalServerErrorResponseObj } from './responseObjects';

@ApiTags('ban')
@Controller('ban')
export class BanController {

  constructor(private readonly banService: BanService) { }

  @ApiOperation({ 
    summary: 'Restituisce la lista degli utenti bannati.' 
  })
  @ApiOkResponse({
    description: "Richiesta andata a buon fine",
    type: UsersResponseObj,
  })
  @ApiBadRequestResponse({
    description: "Richiesta mal posta",
    type: BadRequestResponseObj
  })
  @ApiInternalServerErrorResponse({
    description: "Errore interno del server",
    type: InternalServerErrorResponseObj
  })
  @Get("users")
  getBans(@Body() dto?: UsersDto) {
    return this.banService.getBannedUsers(dto);
  }


  @ApiOperation({ 
    summary: 'Restituisce le informazioni di uno specifico utente.' 
  })
  @ApiOkResponse({
    description: "Richiesta andata a buon fine",
    type: UserResponseObj
  })
  @ApiBadRequestResponse({
    description: "Richiesta mal posta",
    type: BadRequestResponseObj
  })
  @ApiInternalServerErrorResponse({
    description: "Errore interno del server",
    type: InternalServerErrorResponseObj
  })
  @Get("user")
  getBan(@Query() userQuery: UserQuery, @Body() userDto?: UserDto) {
    return this.banService.getBannedUser(userQuery, userDto);
  }
}
