import moment = require("moment");

export class UtilsDate {
  static sqlDateToNormalDate(sqlDate: string): Date {
    if (!sqlDate.includes("+")) {
      sqlDate += "+00:00";
    }
    return new Date(sqlDate);
  }

  static dateObjToDateSql(date: Date): string {
    return moment(date).format("YYYY[-]MM[-]DD");
  }

  static dateObjToDateTimeSql(date: Date): string {
    return moment(date).format("YYYY[-]MM[-]DD[ ]HH[:]mm[:]ss");
  }

  static secondsToFormattedStringIT(seconds: number): string {
    let format = "";
    const days = Math.floor(seconds / 60 / 60 / 24);
    const hours = Math.floor(seconds / 60 / 60) % 24;
    const minutes = Math.floor(seconds / 60) % 60;

    seconds = seconds % 60;

    if (days === 1) {
      format += days + " giorno ";
    } else if (days > 1) {
      format += days + " giorni ";
    }

    if (hours === 1) {
      format += hours + " ora ";
    } else if (hours > 1) {
      format += hours + " ore ";
    }

    if (minutes === 1) {
      format += minutes + " minuto ";
    } else if (minutes > 1) {
      format += minutes + " minuti ";
    }

    if (seconds === 1) {
      format += seconds + " secondo ";
    } else if (seconds > 1) {
      format += seconds + " secondi ";
    }

    return format.slice(0, -1);
  }

  static secondsToFormattedStringEN(seconds: number): string {
    let format = "";
    const days = Math.floor(seconds / 60 / 60 / 24);
    const hours = Math.floor(seconds / 60 / 60) % 24;
    const minutes = Math.floor(seconds / 60) % 60;

    seconds = seconds % 60;

    if (days === 1) {
      format += days + " day ";
    } else if (days > 1) {
      format += days + " days ";
    }

    if (hours === 1) {
      format += hours + " hour ";
    } else if (hours > 1) {
      format += hours + " hours ";
    }

    if (minutes === 1) {
      format += minutes + " minute ";
    } else if (minutes > 1) {
      format += minutes + " minutes ";
    }

    if (seconds === 1) {
      format += seconds + " second ";
    } else if (seconds > 1) {
      format += seconds + " seconds ";
    }

    return format.slice(0, -1);
  }

  static msToTimeFormatted(s: number): string {
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
    const hrs = (s - mins) / 60;

    return (
      UtilsDate.minDigits(hrs.toString(10), 2) +
      ":" +
      UtilsDate.minDigits(mins.toString(10), 2) +
      ":" +
      UtilsDate.minDigits(secs.toString(10), 2) +
      "." +
      UtilsDate.minDigits(Math.floor(ms).toString(10), 3)
    );
  }

  static minDigits(num: string, digits: number): string {
    if (num.length < digits) {
      return "0".repeat(digits - num.length) + num;
    }
    return num;
  }

  static secondsDiff(d1: Date, d2: Date, signed = false): number {
    const t2 = d2.getTime();
    const t1 = d1.getTime();

    const res = Math.trunc((t2 - t1) / 1000);

    return signed ? res : Math.abs(res);
  }

  static hoursDiff(d1: Date, d2: Date, signed = false): number {
    const t2 = d2.getTime();
    const t1 = d1.getTime();

    const res = Math.trunc((t2 - t1) / (3600 * 1000));

    return signed ? res : Math.abs(res);
  }

  static daysDiff(d1: Date, d2: Date, signed = false): number {
    const t2 = d2.getTime();
    const t1 = d1.getTime();

    const res = Math.trunc((t2 - t1) / (24 * 3600 * 1000));

    return signed ? res : Math.abs(res);
  }

  static weeksDiff(d1: Date, d2: Date, signed = false): number {
    const t2 = d2.getTime();
    const t1 = d1.getTime();

    const res = Math.trunc((t2 - t1) / (24 * 3600 * 1000 * 7));

    return signed ? res : Math.abs(res);
  }

  static monthsDiff(d1: Date, d2: Date, signed = false): number {
    const d1Y = d1.getFullYear();
    const d2Y = d2.getFullYear();
    const d1M = d1.getMonth();
    const d2M = d2.getMonth();

    const res = d2M + 12 * d2Y - (d1M + 12 * d1Y);

    return signed ? res : Math.abs(res);
  }

  static yearsDiff(d1: Date, d2: Date, signed = false): number {
    const res = d2.getFullYear() - d1.getFullYear();

    return signed ? res : Math.abs(res);
  }

  static currentTimeFormatted(): string {
    const date = new Date();
    const h = date.getHours().toString();
    const m = date.getMinutes().toString();

    return (
      (h.length === 2 ? h : "0" + h) + ":" + (m.length === 2 ? m : "0" + m)
    );
  }

  static currentDateFormatted(): string {
    const date = new Date();
    const y = date.getFullYear().toString();
    const m = (date.getMonth() + 1).toString();
    const d = date.getDate().toString();

    return (
      y +
      "-" +
      (m.length === 2 ? m : "0" + m) +
      "-" +
      (d.length === 2 ? d : "0" + d)
    );
  }

  static addDaysToDate(date: number | string | Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}