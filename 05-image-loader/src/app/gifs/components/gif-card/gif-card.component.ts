import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'app-gif-component-card',
  templateUrl: './gif-card.component.html'
})
export class GifCardComponent implements OnInit{

  @Input()
  public gif?: Gif;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif should not be null.');
  }
}
