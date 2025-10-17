import { Component, OnInit } from '@angular/core';

export interface IValor {
  imagen: string;
  url: string;
}

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: false,
})
export class Tab5Page implements OnInit {

  valoresLista: IValor[] = [
      {
        imagen: "../assets/imagenes/BIRT_LOGO.png",
        url: "https://birt.eus",
      },
      {
        imagen: "../assets/imagenes/easo_logo.png",
        url: "https://easo.hezkuntza.net",
      },
      {
        imagen: "../assets/imagenes/nicolas_larburu_logo.jpg",
        url: "https://nlarburu.hezkuntza.net",
      },
      {
        imagen: "../assets/imagenes/ciudad_jardin_logo.png",
        url: "https://ciudadjardin.hezkuntza.net",
      }

    ];

  constructor() { }

  ngOnInit() {
  }

}
