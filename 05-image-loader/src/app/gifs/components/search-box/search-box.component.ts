import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs-components-search-box',
  template: `
  <h5>Buscar:</h5>
  <input type="text"
        class="form-control"
        placeholder="Buscar gifs..."
        (keyup.enter)="searchTag()"
        #inputElement/>
  `
})
export class SearchBoxComponent {

  @ViewChild('inputElement')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {
  }

  searchTag() : void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.saveSearchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
