import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  archivos: Item[];

  constructor() { }

  ngOnInit() {
  }

  cargarImagen() {

  }

}
