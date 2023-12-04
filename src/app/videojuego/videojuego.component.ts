export class Videojuego{

  constructor(private _id: number,
              public titulo: string,
              public compania: string,
              public imagen: string,
              public valoracion: number,) {
    this._id = _id;
    this.titulo = titulo;
    this.compania = compania;
    this.imagen = imagen;
    this.valoracion = valoracion;
  }

  public get id() : number{
    return this._id;
  }

  public toString() : string {
    return `ID: ${this._id},
            Titulo: ${this.titulo},
            Compañia: ${this.compania},
            Imagen: ${this.imagen},
            Valoracion media: ${this.valoracion}`
  }
}
