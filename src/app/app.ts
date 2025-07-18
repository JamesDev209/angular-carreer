import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Test } from './test/test';
import { Header } from './components/header/header';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombres: string[] = ['Dani', 'fofi']
}
