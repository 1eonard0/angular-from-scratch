import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Europe', 'Asia', 'Oceania'];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region) {
    this.selectedRegion = region;
    this.isLoading = true;
    this.countriesService.searchRegion(region)
    .subscribe(countries => {
      this.countries = countries
      this.isLoading = false;
    });
  }

}
