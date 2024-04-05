import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroesNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Motaro'];
  public deletedHeroesNames: string[] = [];
  public deletedNames: string = '';

  removeLastHero(): void {
    let heroName: string | undefined = this.heroesNames.pop();
    if(heroName != undefined){
      this.deletedHeroesNames.push(heroName);
      this.deletedNames = this.deletedHeroesNames.join(', ');
    }
  }
}
