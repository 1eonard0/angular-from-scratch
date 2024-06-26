import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor(private gifService: GifsService){
  }

  get tags(): string[] {
    return this.gifService.tagHistory;
  }

  searchTag(tag: string) {
    this.gifService.saveSearchTag(tag);
  }
}
