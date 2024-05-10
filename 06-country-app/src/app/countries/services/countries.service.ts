import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private urlBase: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.urlBase}/alpha/${ code }`)
    .pipe(
      map( countries => countries.length > 0 ? countries[0] : null),
      catchError( () => of(null) )
    );
  }

  searchCapital( term: string ) : Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.urlBase}/capital/${ term }`)
    .pipe(catchError( () => of([]) ) );
  }

  searchCountry( term: string ) : Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.urlBase}/name/${ term }`)
    .pipe(catchError( () => of([]) ) );
  }

  searchRegion( region: string ) : Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.urlBase}/region/${ region }`)
    .pipe(catchError( () => of([]) ) );
  }
}