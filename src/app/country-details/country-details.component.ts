import { Component, OnInit,OnChanges, Input, SimpleChanges } from '@angular/core';
import {CountriesModel} from '../model/countries-model';
//import {MatTableDataSource} from '@angular/material';
// import { pipe } from 'rxjs';
// import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit, OnChanges {
  
  @Input('countriesData') countries: CountriesModel;
  @Input('selCountry') country;
  tableDataSource: any;
  displayedColumns: string[] = ['name', 'capital', 'population', 'currencies', 'flag'];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tableDataSource =this.countries;
  
  var selectedCountryDetails = (countryList) => {
    return (countryList['name'] === this.country)
   };
             
   this.tableDataSource =  this.tableDataSource.filter(selectedCountryDetails);

  }

}
