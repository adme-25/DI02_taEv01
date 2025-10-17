import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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
  reiniciar: boolean = false;

  constructor(private alerta: AlertController) { }

  onClick() {
    this.contador++;
    
    if (this.numPropuesto > this.numAdivinar) {
      this.mensaje="Introduce un número menor";
    } else if (this.numPropuesto < this.numAdivinar) {
      this.mensaje="Introduce un número mayor";
    } else if (this.numPropuesto === this.numAdivinar) {
      this.mensaje="Has acertado";
      this.reiniciar = true;
    }
  }

  ngOnInit(): void {
    this.numAdivinar = Math.floor(Math.random()*100 + 1);
    console.log("El numero a adivinar es: " + this.numAdivinar);
  }

  async jugarOtravez() {
    const alert = await this.alerta.create({
      header: 'Jugar de nuevo',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Okay',
          handler: () => {
            this.ngOnInit();
            this.numPropuesto = null;
            this.contador =0;
            this.mensaje = "Introduce un número entre 0 y 100";
            this.reiniciar = false;
          } 
        }
      ]
    });
    await alert.present();
  }

}
