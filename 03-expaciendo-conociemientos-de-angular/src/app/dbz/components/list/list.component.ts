import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-component-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public indexByDeleteEmitter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string): void {

    if(!id) return;
    this.indexByDeleteEmitter.emit(id);
  }
}
