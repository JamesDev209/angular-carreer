import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import Persona from '../../interfaces/Persona';

@Component({
  selector: 'app-home',
  imports: [Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  personas: Persona[]=[
    {
        nombre: 'james',
        apellido: 'perez'
    },
    {
        nombre: 'juan',
        apellido: 'perez'
    }
  ]
}
