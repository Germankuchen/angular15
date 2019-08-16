import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CargaImagenService {

  constructor() { }

  cargarImagenes(imagenes: Item[]) {
    console.log(imagenes);
  }


}
