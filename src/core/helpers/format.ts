import type { FormattedDate, FormattedDateTime, FormattedTime } from '../models';

export class Format {
    
  static formatDateTime(dateTimeString: string): FormattedDateTime {
    const dateTime = new Date(dateTimeString);
    
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    const seconds = String(dateTime.getSeconds()).padStart(2, '0');
    
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return {
      date: formattedDate,
      time: formattedTime
    };
  }

  static formatDate(dateTimeString: string): FormattedDate {
    const dateTime = new Date(dateTimeString);
    
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, '0');
    const day = String(dateTime.getDate()).padStart(2, '0');
   
    const formattedDate = `${day}/${month}/${year}`;

    return {
      date: formattedDate
    };
  }

  static formatTime(dateTimeString: string): FormattedTime {
    const dateTime = new Date(dateTimeString);
    
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    const seconds = String(dateTime.getSeconds()).padStart(2, '0');
    
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return {
      time: formattedTime
    };
  }

}