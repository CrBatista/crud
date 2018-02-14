import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Country } from '../types/country';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryService {

  private readonly baseUrl = 'https://restcountries.eu/rest/v2';

  constructor(private http: Http) { }

  /**
   * Will return all the countries
   *
   * @returns {Promise<Country[]>}
   * @memberof CountryService
   * @public
   */
  public getAllCountries(): Promise<Country[]> {
    return this.http.get(this.baseUrl + '/all')
      .map((response) => response.json() as Country[])
      .toPromise();
  }
}
