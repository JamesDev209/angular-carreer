import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Test } from './test/test';
import { Header } from './components/header/header';
import { FormsModule } from '@angular/forms';
import { Formularios } from './components/formularios/formularios';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test, Header, FormsModule, Formularios],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombres: string[] = ['Dani', 'fofi']

    jugadores: any = [
      {
        id:1,
        name:"garza",
        edad:26
      },
      {
        id:2,
        name:"mimi",
        edad:23
      }
    ]
}
