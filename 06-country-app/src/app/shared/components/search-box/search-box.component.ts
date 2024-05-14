import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Output() searchTextInput = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.searchTextInput.emit(this.txtInput.nativeElement.value);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  // search() {
  //   this.searchTextInput.emit(this.txtInput.nativeElement.value);
  // }

  onKeyPress(): void {
    this.debouncer.next(this.txtInput.nativeElement.value);
  }
}
