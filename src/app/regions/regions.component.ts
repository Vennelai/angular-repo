import { Component } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent {

  selectedRegion: string;
  selectedCountry: string;
  countries:  any;
  private dataSubscription: Subscription;


  regions = [
    {value: 'asia', name: 'Asia'},
    {value: 'europe', name: 'Europe'}
  ];

  constructor(private dataService: CountriesService) { }

  onRegionChange() {
    this.dataSubscription = this.dataService.getCountriesData(this.selectedRegion).subscribe(data => {
      this.countries = data;
    });
   }

   ngOnDestroy() {
    this.dataSubscription.unsubscribe()
}

}
