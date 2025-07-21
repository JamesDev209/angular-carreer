import { Injectable } from '@angular/core';
import Ticket from '../models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class Tikets {

  tickets: Ticket[];

  constructor() {
    this.tickets = [
      {
        id: 1,
        title: 'Ticket 1',
        description: 'Ticket 1 description'
      }
    ];
  }
}
