import { Component, Input } from '@angular/core';
import { Country } from '../../types/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.less']
})
export class CountryComponent {

  @Input()
  public country: Country[];

  constructor() { }

}
