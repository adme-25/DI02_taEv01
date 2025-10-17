import { booleanAttribute, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: false,
})



export class Tab4Page implements OnInit{
  numAdivinar: number = 0;
  numPropuesto: any;
  mensaje: string = "Introduce un número entre 0 y 100";
  contador: number = 0;
  constructor() { }

  onClick() {
    console.log("botón pulsado");
    this.contador = 1 + this.contador;
    console.log("contador: " + this.contador);
    if (this.numPropuesto > this.numAdivinar) {
      this.mensaje="Introduce un número menor";
    } else if (this.numPropuesto < this.numAdivinar) {
      this.mensaje="Introduce un número mayor";
    } else if (this.numPropuesto = this.numAdivinar) {
      this.mensaje="Has acertado";
    }
  }
  jugarOtravez() {}

  ngOnInit(): void {
    this.numAdivinar = Math.floor(Math.random()*100 + 1);
    console.log("El numero a adivinar es: " + this.numAdivinar);
  }


}
