import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Caracter } from '../interfaces/caracter.interface';

@Injectable({
  providedIn: 'root'
})


export class DbzService {

  public caracters:Caracter[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 8000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    }
  ];



  addCharacter(caracter:Caracter):void {
    const newCharacter: Caracter = {
      id: uuid(),
      name: caracter.name,
      power: caracter.power
    }

   this.caracters.push(newCharacter);
   //console.log(this.caracters);
  }

  // onDeleted( index:number):void {
  //   this.caracters.splice(index,1);
  // }

  deletedCharacterById(id: string) {
    this.caracters = this.caracters.filter(caracter => caracter.id !== id);
  }


  constructor() { }

}
