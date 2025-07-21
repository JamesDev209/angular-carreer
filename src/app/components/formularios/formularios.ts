import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  imports: [ReactiveFormsModule],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css'
})
export class Formularios {
  movieForm: FormGroup;
  name: FormControl;
  duration:FormControl;
  director: FormControl;

  constructor(){
    this.name = new FormControl('');
    this.duration = new FormControl('');
    this.director = new FormControl('');
    
    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director
    })

  }
  onSubmit(): void {
    if (this.movieForm.valid) {
      console.log('Formulario enviado:', this.movieForm.value);
    } else {
      console.log('El formulario contiene errores.');
    }
  }
}
