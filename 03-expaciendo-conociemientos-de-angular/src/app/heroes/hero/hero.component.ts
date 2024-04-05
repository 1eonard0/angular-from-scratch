import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age:  number = 45;

  public title: string = 'Spiderman';
  public edad:  string = 'edad';
  public nombre:string = 'nombre';

  onChangeNombre(): void{
    this.nombre = this.name;
    this.title = this.name;
  }

  onChangeEdad(): void{
    this.edad = this.age.toString();
  }

  get capitalizeName(): string {
    return this.nombre.toUpperCase();
  }

  heroDescription(): string {
    return `${this.nombre} - ${this.edad}`;
  }
}
