import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../types/country';

@Component({
  selector: 'app-country-container',
  templateUrl: './country-container.component.html',
  styleUrls: ['./country-container.component.less']
})
export class CountryContainerComponent implements OnInit {

  public countries: Country[];

  constructor(private countryService: CountryService) { }

  public ngOnInit() {
    this.countryService.getAllCountries()
      .then((response) => {
        this.countries = response;
      }).catch((error) => {
        console.error('Error while fetching data: ', error);
      });
  }
}
