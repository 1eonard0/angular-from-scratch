import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared-component-lazy-image',
  templateUrl: './lazy-image.component.html'
})
export class LazyImageComponent implements OnInit {

  @Input()
  public imgUrl!: string;

  @Input()
  public title: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if(!this.imgUrl) throw new Error('Image source is required.');
  }

  isLoaded(){
    this.hasLoaded = !this.hasLoaded;
  }

}
