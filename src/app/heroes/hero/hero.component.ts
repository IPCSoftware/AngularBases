import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre:string = 'Batman';
  public edad:number = 40;

  get capitalizedName() {
    return this.nombre.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.nombre } - ${this.edad}`;
  }

  cambiarNombre():void {
    this.nombre = 'Superman';
  }

  cambiarEdad():void {
    this.edad = 30;
  }


}
