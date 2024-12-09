import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Caracter } from '../interfaces/caracter.interface';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html'
})

export class NameComponent  {

constructor( private dbzService:DbzService){}

get caracters(): Caracter[] {
  return [...this.dbzService.caracters];
}
onNewCharacter( Caracter:Caracter){
 this.dbzService.addCharacter(Caracter);
}
onDeletedCharacter(id:string) {
  this.dbzService.deletedCharacterById(id);
}

}
