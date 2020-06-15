import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CountriesModel} from '../model/countries-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  apiUrl = 'https://restcountries.eu/rest/v2/region/';
  countryDetails : any[];

  constructor(private http: HttpClient) { }

  getCountriesData(region): Observable<CountriesModel> {
    var url = this.apiUrl+region;

   return this.http.get<CountriesModel>(url).pipe(map( (data) => {
      return this.countryDetails = this.formatData(data);
   }));
  }

  formatData(data) : any {
     data.forEach((record) => {
       const currencies = record.currencies;
       let curArray = [];
       currencies.forEach((currencyRecord) => {
         const name = currencyRecord.name;
         curArray.push(name);
       });
       record.currencies = curArray;
     });
     return data;
  }
}
