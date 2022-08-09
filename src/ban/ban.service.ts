import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserQuery, UserDto,  UsersDto } from './dto';
import * as hash from 'object-hash';
@Injectable()
export class BanService {

  constructor(private readonly prismaService: PrismaService) { }

  async getBannedUsers(dto?: UsersDto) {
    const filter = {
      endDate: null,
      AND: {}
    };

    if (dto.filter && dto.filter.gravities) {
      filter.AND = {
        gravity: { in: dto.filter.gravities }
      }
    }

    const users = await this.prismaService.ban.findMany(
      {
        where: filter,
        select: {
          uuid: dto.fields != null && dto.fields.uuid!=null  ? dto.fields.uuid : true,
          nickname: dto.fields != null && dto.fields.nickname != null ? dto.fields.nickname : true,
          startDate: dto.fields != null && dto.fields.startDate != null ? dto.fields.startDate : true,
          gravity: dto.fields != null && dto.fields.gravity != null ? dto.fields.gravity : true,
          reason: dto.fields != null && dto.fields.reason != null ? dto.fields.reason : true
        }
      }
    );

    return {
      "count": users.length,
      "users": users,
      "hashCode": users.length != 0 ? hash(users) : null
    }
  }

  async getBannedUser(
    query: UserQuery, 
    dto?: UserDto
    ) {

    let condition;
    if (query.nickname && query.uuid) {
      condition = {
        nickname: query.nickname,
        AND: {
          uuid: query.uuid,
          AND: {
            endDate: null
          }
        }
      }
    } else if (query.nickname) {
      condition = {
        nickname: query.nickname,
        AND: {
          endDate: null
        }
      }
    } else if (query.uuid) {
      condition = {
        uuid: query.uuid,
        AND: {
          endDate: null
        }
      }
    }

    const user = await this.prismaService.ban.findFirst({
      where: condition,
      select: {
        uuid: dto.fields != null && dto.fields.uuid != null ? dto.fields.uuid : true,
        nickname: dto.fields != null && dto.fields.nickname != null ? dto.fields.nickname : true,
        startDate: dto.fields != null && dto.fields.startDate != null ? dto.fields.startDate : true,
        gravity: dto.fields != null && dto.fields.gravity != null ? dto.fields.gravity : true,
        reason: dto.fields != null && dto.fields.reason != null ? dto.fields.reason : true
      }
    });

    return {
      "banned": user != null,
      "user": user,
      "hashCode": user != null ? hash(user) : null
    };
  }

}
