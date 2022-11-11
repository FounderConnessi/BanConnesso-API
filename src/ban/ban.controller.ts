import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags, ApiTooManyRequestsResponse } from '@nestjs/swagger';
import { BanService } from './ban.service';
import { UserQuery, UserDto,  UsersDto } from './dto';
import { TooManyReqsResponseObj, UserResponseObj, UsersResponseObj, InternalServerErrorResponseObj, BadUsersRequestResponseObj,  BadUserRequestResponseObj } from './responseObjects';

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
    type: BadUsersRequestResponseObj
  })
  @ApiInternalServerErrorResponse({
    description: "Errore interno del server",
    type: InternalServerErrorResponseObj
  })
  @ApiTooManyRequestsResponse({
    description: "Limite di richieste superato (5 ogni 60s)",
    type: TooManyReqsResponseObj
  })
  @Get("users")
  getBans() {
    return this.banService.getBannedUsers();
  }

  @ApiOperation({ 
    summary: 'Restituisce la lista filtrata degli utenti bannati.' 
  })
  @ApiOkResponse({
    description: "Richiesta andata a buon fine",
    type: UsersResponseObj,
  })
  @ApiInternalServerErrorResponse({
    description: "Errore interno del server",
    type: InternalServerErrorResponseObj
  })
  @ApiTooManyRequestsResponse({
    description: "Limite di richieste superato (5 ogni 60s)",
    type: TooManyReqsResponseObj
  })
  @Post("users")
  postBans(@Body() dto: UsersDto) {
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
    type: BadUserRequestResponseObj
  })
  @ApiInternalServerErrorResponse({
    description: "Errore interno del server",
    type: InternalServerErrorResponseObj
  })
  @ApiTooManyRequestsResponse({
    description: "Limite di richieste superato (5 ogni 60s)",
    type: TooManyReqsResponseObj
  })
  @Get("user")
  getBan(@Query() userQuery: UserQuery) {
    return this.banService.getBannedUser(userQuery);
  }

  @ApiOperation({ 
    summary: 'Restituisce le informazioni filtrate di uno specifico utente.' 
  })
  @ApiOkResponse({
    description: "Richiesta andata a buon fine",
    type: UserResponseObj
  })
  @ApiBadRequestResponse({
    description: "Richiesta mal posta",
    type: BadUserRequestResponseObj
  })
  @ApiInternalServerErrorResponse({
    description: "Errore interno del server",
    type: InternalServerErrorResponseObj
  })
  @ApiTooManyRequestsResponse({
    description: "Limite di richieste superato (5 ogni 60s)",
    type: TooManyReqsResponseObj
  })
  @Post("user")
  postBan(@Query() userQuery: UserQuery, @Body() userDto?: UserDto) {
    return this.banService.getBannedUser(userQuery, userDto);
  }
}
