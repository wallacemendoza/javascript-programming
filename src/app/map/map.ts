import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CountryInfoService } from '../services/country-info.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrls: ['./map.css']
})
export class MapComponent implements OnInit {
  title = 'country-info-app';
  countryData: any;
  selectedCountryCode: string | null = null;
  selectedElement: Element | null = null;

  constructor(
    private http: HttpClient,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private countryInfoService: CountryInfoService
  ) {}

  ngOnInit(): void {
    this.loadSvg();
    this.fetchCountryInfo('BR'); // Load Brazil by default
  }

  loadSvg(): void {
    this.http.get('assets/world-map.svg', { responseType: 'text' }).subscribe(svg => {
      const container = this.elRef.nativeElement.querySelector('#svg-container');
      if (!container) return;

      container.innerHTML = svg;

      const paths = container.querySelectorAll('[id]');
      paths.forEach((el: Element) => {
        const countryCode = el.getAttribute('id');
        if (!countryCode) return;

        // Hover
        this.renderer.listen(el, 'mouseenter', () => {
          if (el !== this.selectedElement) {
            this.renderer.setStyle(el, 'fill', '#4db8ff');
          }
        });

        this.renderer.listen(el, 'mouseleave', () => {
          if (el !== this.selectedElement) {
            this.renderer.removeStyle(el, 'fill');
          }
        });

        // Click
        this.renderer.listen(el, 'click', () => {
          if (this.selectedElement) {
            this.renderer.removeStyle(this.selectedElement, 'fill');
          }

          this.selectedElement = el;
          this.renderer.setStyle(el, 'fill', '#007acc');

          this.onCountryClick(countryCode);
        });

        this.renderer.setStyle(el, 'cursor', 'pointer');
        this.renderer.setStyle(el, 'transition', 'fill 0.2s ease-in-out');
      });
    });
  }

  onCountryClick(code: string) {
    this.selectedCountryCode = code;
    this.fetchCountryInfo(code);
  }

  fetchCountryInfo(code: string) {
    this.countryInfoService.getCountryInfo(code).subscribe({
      next: (data) => this.countryData = data,
      error: (err) => console.error('Error fetching country info:', err)
    });
  }
}
