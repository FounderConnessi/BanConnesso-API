import { Injectable } from '@nestjs/common';
import {UtilsDate} from "./utils/UtilsDate";

@Injectable()
export class AppService {

  getStatus() {
    return {
      status: "online",
      environment: process.env.NODE_ENV,
      version: process.env.npm_package_version,
      uptime: UtilsDate.secondsToFormattedStringEN(
        Math.trunc(process.uptime())
      ), 
    };
  }

}