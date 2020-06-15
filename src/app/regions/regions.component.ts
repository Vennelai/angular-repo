import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { CountriesService } from '../services/countries.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/appReducer';
//import {regionsModel} from '../model/regions-model';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  selectedRegion: string;
  selectedCountry: any;
  countries:  any;
  countriesInfo: any;
  //rrArr: any;


  regions = [
    {value: 'asia', name: 'Asia'},
    {value: 'europe', name: 'Europe'}
  ];

  constructor(private dataService: CountriesService, private store: Store<fromApp.AppState>,) {
    // this.rrArr = dataService.regions;
   }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(){
   // this.regions = this.store.select<Array<regionsModel>>('regions');
    
    //  this.store.select('regions').subscribe(data => { 
    //   this.regions = data});

  }
  onRegionChange() {
    console.log('region changed'+ this.selectedRegion);
    this.getDataFromSource();
  }

  onCountryChange() {

  }
  getDataFromSource() {
    this.dataService.getCountriesData(this.selectedRegion).subscribe(data => {
      this.countries = data;
      this.countriesInfo = data;
    });
   }

}
