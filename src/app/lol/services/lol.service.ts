import { Injectable } from '@angular/core';
import { Campeon } from '../interfaces/lol.interface';

//se requiere usar el decorador injectar
@Injectable()
export class serviciolol {
  /** aqui es donde trasladamos lo que habia en el mainpage component por que alla no es
   * necesario que se tenga nada a la final son servicios lo que vamos a ejecutar por eso
   * lo separamos del main page o de donde se tenga   */
  private _Campeones: Campeon[] = [
    {
      nombre: 'Zed',
      dificultad: 5,
    },
    {
      nombre: 'Teemo',
      dificultad: 1,
    },
    ];
    
/**Como hice el arreglo de los personajes privado y no lo puedo acceder desde otro lado
 * necesito retornar lo que contiene de alguna manera por eso hago un metodo get para 
 * obtener la info, pero tambien por buena practica es recomendable usar el operador spread
 * que lo que hace eso como en clases anteriores es generar un nuevo objeto a partir de
 * lo que contenga.
 */
    get Campeones():Campeon[] {
        return [...this._Campeones]
    }

  //constructor de la clase
    constructor() { }
    
    //Aqui colocamos el metodo para agregar los campeones nuevamente 
    agregarCampeon(campeon: Campeon) {
        this._Campeones.push(campeon)
    }
}
