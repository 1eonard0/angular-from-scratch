import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagHistory: string [] = [];
  public gifsList: Gif [] = [];

  private giphy_api_key: string = '9RPXeeqyXMyNq0LbJ2hoEYum3bzcCase';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) {
    this.loadLocalStorage();
   }

  get tagHistory() : string[] {
    return [...this._tagHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    if( this._tagHistory.includes(tag) ){
      this._tagHistory = this._tagHistory.filter(oldTag => oldTag !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void {
    if( !localStorage.getItem('history') ) return;

    this._tagHistory = JSON.parse( localStorage.getItem('history')! );
    this.saveSearchTag(this._tagHistory[0]);
  }

  saveSearchTag( tag: string): void {

    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.giphy_api_key)
      .set('q', tag)
      .set('limit', '10');

    this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })
      .subscribe(resp => {
        this.gifsList = resp.data;
        console.log({ 'gifs': this.gifsList });
      });

  }

}
