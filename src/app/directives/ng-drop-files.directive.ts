import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../models/item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  constructor() { }

  @Input()
  archivos: Item[] = [];

  @Output()
  mouseSobre: EventEmitter<boolean> = new EventEmitter();

  @Output()
  mouseFuera: EventEmitter<boolean> = new EventEmitter();

  @HostListener('dragover', ['$event'])
  public onDragEnter( event: any) {
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  public onDragOut( event: any) {
    this.mouseFuera.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrrop( event: any) {
    console.log(event);
    const transferencia = this._getTransfrencia(event);
    if (transferencia) {
      this._extraerArchivos(transferencia.files);
      this._prevenirDetener(event);
      //this.mouseFuera.emit(false);
    }
  }

  private _getTransfrencia( event: any ) {
    return event.dataTransfer ? event.dataTransfer : event.originalTransfer.dataTransfer;
  }

  private _extraerArchivos(archivos: FileList) {
    console.log(archivos);
    // tslint:disable-next-line: forin
    for (const unaPropiedad in Object.getOwnPropertyNames(archivos)) {
      const archivoTemporal = archivos[unaPropiedad];
      if (this._archivoCorrecto(archivoTemporal)) {
        const archivo = new Item(archivoTemporal);
        this.archivos.push(archivo);
      }
    }
    console.log(this.archivos);
  }

  private _prevenirDetener(evento) {
    evento.preventDefault();
    evento.stopPropagation();
  }

  private _yaExisteArchivo(nombre: string): boolean {
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo === nombre) {
        return true;
      }
      return false;
    }
  }

  private _esImagen(formato: string): boolean {
    if (formato === '' || formato === undefined) {
      return false;
    }
    if (formato.startsWith('image')) {
      return true;
    }
    return false;
  }

  private _archivoCorrecto(archivo: File) {
    return (!this._yaExisteArchivo(archivo.name) && this._esImagen(archivo.type));
  }

}
