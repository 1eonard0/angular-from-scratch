import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Output() searchTextInput = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  search() {
    this.searchTextInput.emit(this.txtInput.nativeElement.value);
  }
}
