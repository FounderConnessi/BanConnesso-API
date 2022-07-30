import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUserDto } from './dto';

@Injectable()
export class BanService {

  constructor(private readonly prismaService: PrismaService) { }

  getBannedUsers() {
    return this.prismaService.ban.findMany(
      {
        where: {
          valid: true
        },
        select: {
          uuid: true,
          nickname: true,
          reason: true
        }
      }
    );
  }

  getBannedUser(dto: GetUserDto) {
    const user = this.prismaService.ban.findUnique({
      where: {
        nickname: dto.nickname
      }
    })
    return user;
  }

}
