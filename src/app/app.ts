import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryInfoService } from './services/country-info.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent implements OnInit {
  title = 'country-info-app';
  countryData: any;

  constructor(private countryInfoService: CountryInfoService) {}

  ngOnInit(): void {
    this.countryInfoService.getCountryInfo('BR').subscribe({
      next: (data) => {
        this.countryData = data;
        console.log('Fetched data:', data);
      },
      error: (err) => {
        console.error('Error fetching country info:', err);
      },
    });
  }
}
