import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Tikets } from '../../services/tikets';
// import { Main } from '../../components/main/main';
// import { Footer } from '../../components/footer/footer';


@Component({
  selector: 'app-movie-list',
  imports: [Header],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {
  constructor(public ticketService: Tikets){

  }
}
