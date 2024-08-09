// verificar-dni.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-verificar-dni',
  templateUrl: './asullca-ejercicio3.component.html',
  styleUrls: ['./asullca-ejercicio3.component.css']
})
export class AsullcaEjercicio3Component {
  anioNacimiento: number | undefined;
  mensaje: string = '';

  verificarDNI(): void {
    if (!this.anioNacimiento) {
      this.mensaje = 'Por favor, ingrese un año de nacimiento válido.';
      return;
    }

    const edad = new Date().getFullYear() - this.anioNacimiento;

    if (edad >= 18) {
      this.mensaje = 'Debe sacar su DNI.';
    } else {
      this.mensaje = 'No es necesario sacar su DNI aún.';
    }
  }
}