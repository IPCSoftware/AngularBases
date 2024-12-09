import { Component, EventEmitter, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'app-dbz-add-character',
  standalone: false,

  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
public onNewCharacter: EventEmitter<Caracter> = new EventEmitter();

public caracter:Caracter = {
  name: '',
  power:0
};

emitcharacter():void {

  // debugger;
  console.log(this.caracter);
  if(this.caracter.name.length === 0) return;

  this.onNewCharacter.emit({...this.caracter});

  this.caracter.name = '';
  this.caracter.power = 0;

};

}
