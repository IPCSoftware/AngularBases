import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracter.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListDBZComponent {

@Input()
public CaracterList: Caracter[] = [{
  name:'Gotten',
  power:100
}]


@Output()
public onDeletedCharacter: EventEmitter<string> = new EventEmitter();

onDeleteCharacter(id?:string):void {

  if(!id) return;
// console.log({index});
this.onDeletedCharacter.emit(id);
}

}
