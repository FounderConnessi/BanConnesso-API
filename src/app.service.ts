import { Injectable } from '@nestjs/common';
import {UtilsDate} from "./utils/UtilsDate";

@Injectable()
export class AppService {

  getStatus() {
    return {
      status: "online",
      environment: process.env.NODE_ENV,
      version: {
        api: process.env.npm_package_version,
        bungeecord: process.env.bungeecord_version,
        velocity: process.env.velocity_version,
        spigot: process.env.spigot_version
      },
      uptime: UtilsDate.secondsToFormattedStringEN(
        Math.trunc(process.uptime())
      ), 
    };
  }

}