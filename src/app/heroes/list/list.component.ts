import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Spiderman','Superman','Thor','Ironman','Hulk'];
  public heroeBorrado?:string

  borrarHeroe():void {
   this.heroeBorrado = this.heroNames.pop();

  }

}
