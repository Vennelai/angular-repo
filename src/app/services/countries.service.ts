import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import {CountriesModel} from '../model/countries-model';
import {regionStore, region} from '../model/regions-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  regions: Observable<Array<region>>;
  apiUrl = 'https://restcountries.eu/rest/v2/region/';
  countryDetails : any[];
  curArray = [];

  constructor(private http: HttpClient,private store: Store<regionStore>) { 
   //this.regions = store.select<Array<region>>('regions');
   this.store.select('regions').subscribe(data => { console.log('dataaa '+data)});
    this.loadItems();
  }
  loadItems(){
    let initialItems: region[] = [
      {
          
          name: "Asia",
          value: "asia"
      },
      {
          name: "Europe",
          value: "europe"
      }
  ];
  this.store.dispatch({ type: 'LOAD_REGIONS', payload: initialItems });
  }

  getCountriesData(region): Observable<CountriesModel> {
    var url = this.apiUrl+region;

   //return this.http.get<CountriesModel>(url);
   return this.http.get<CountriesModel>(url).pipe(map( (data) => {
      return this.countryDetails = this.formatData(data);
   }));
  }

  formatData(data) : any {
     data.forEach((record) => {
       const currencies = record.currencies;
       this.curArray = [];
       currencies.forEach((currencyRecord) => {
         const name = currencyRecord.name;
         this.curArray.push(name);
       });
       record.currencies = this.curArray;
     });
     return data;
  }
}
