import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { CargaImagenService } from '../../services/carga-imagen.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  archivos: Item[] = [];
  estaSobreDrop = false;

  constructor(private cargaImagen: CargaImagenService) { }

  ngOnInit() {
  }

  estaSobre(event: boolean) {
    console.log(event);
    this.estaSobreDrop = event;
  }

  cargarImagen() {
    this.cargaImagen.cargarImagenes(this.archivos);
  }

  limpiar() {
    this.archivos.length = 0;
  }

  estaFuera(event: boolean) {
    console.log(event);
    this.estaSobreDrop = event;
  }

}
