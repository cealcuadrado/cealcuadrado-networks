import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  date = new Date();

  constructor() { }

  getCurrentYear(): number {
    return this.date.getFullYear();
  }
}
