# `WORLD_MAP_EXPLORER`

```ascii
██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗     ███╗   ███╗ █████╗ ██████╗ 
██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗    ████╗ ████║██╔══██╗██╔══██╗
██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║    ██╔████╔██║███████║██████╔╝
██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║    ██║╚██╔╝██║██╔══██║██╔═══╝ 
╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝    ██║ ╚═╝ ██║██║  ██║██║     
 ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝     ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝     
```

<div align="center">

### 🌍 INTERACTIVE GEOSPATIAL DATA VISUALIZATION ENGINE 🌍

**`ANGULAR_20`** × **`TYPESCRIPT`** × **`REST_API`** × **`SVG_MAPS`**

*Academic research project exploring modern JavaScript frameworks, API integration, and interactive data visualization*

---

![TypeScript](https://img.shields.io/badge/TYPESCRIPT-5.3.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/ANGULAR-20.0.4-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![RxJS](https://img.shields.io/badge/RXJS-7.8.2-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)

</div>

---

## 🎯 `PROJECT_OVERVIEW`

**Interactive world map application** built with Angular 20, featuring real-time country data retrieval via RESTful APIs. Users can explore global information through an intuitive, click-driven interface that transforms geographic exploration into an engaging data discovery experience.

### `CORE_CONCEPT`

```yaml
application_type: "Single Page Application (SPA)"
framework: "Angular 20.0.4"
language: "TypeScript 5.3.3"
architecture: "Component-Based + Reactive Programming"
data_source: "External REST APIs"
visualization: "SVG Interactive World Map"
interaction_model: "Click-to-Query Geographic Data"
```

---

## 🔥 `FEATURES`

<table>
<tr>
<td width="50%">

### `INTERACTIVE_MAP`
```typescript
✓ SVG-based world map rendering
✓ Click-event country detection
✓ Visual hover states
✓ Responsive viewport scaling
✓ Real-time data binding
✓ Dynamic content updates
```

</td>
<td width="50%">

### `API_INTEGRATION`
```typescript
✓ RESTful country data API
✓ Asynchronous HTTP requests
✓ RxJS observable streams
✓ Error handling & loading states
✓ Data transformation pipelines
✓ Caching strategies
```

</td>
</tr>
</table>

### `TECHNICAL_IMPLEMENTATIONS`

| MODULE | TECHNOLOGY | PURPOSE |
|--------|-----------|---------|
| **Framework** | Angular 20 | Component architecture & DI |
| **Language** | TypeScript 5.3 | Type-safe development |
| **State Management** | RxJS 7.8 | Reactive data streams |
| **HTTP Client** | Angular HttpClient | API communication |
| **Routing** | Angular Router | SPA navigation |
| **Build System** | Angular CLI | Development toolchain |
| **Styling** | CSS3 + Angular Bindings | Dynamic UI rendering |

---

## 🛠️ `TECH_STACK`

### `FRONTEND_FRAMEWORK`

```plaintext
┌─────────────────────────────────────────────┐
│  ANGULAR 20.0.4                             │
│  ├─ Component Architecture                  │
│  ├─ Dependency Injection                    │
│  ├─ Reactive Forms                          │
│  ├─ HttpClient Module                       │
│  ├─ Router Module                           │
│  └─ CLI Build System                        │
└─────────────────────────────────────────────┘
```

### `LANGUAGE_&_TOOLS`

```plaintext
┌─────────────────────────────────────────────┐
│  TYPESCRIPT 5.3.3                           │
│  ├─ Static typing                           │
│  ├─ ES2022 target                           │
│  ├─ Decorators (@Component, @Injectable)    │
│  ├─ Interfaces & Type definitions           │
│  └─ Advanced type inference                 │
└─────────────────────────────────────────────┘
```

### `REACTIVE_PROGRAMMING`

```plaintext
┌─────────────────────────────────────────────┐
│  RXJS 7.8.2                                 │
│  ├─ Observables                             │
│  ├─ Operators (map, filter, catchError)    │
│  ├─ Subjects & BehaviorSubjects             │
│  ├─ Async pipe integration                  │
│  └─ Stream composition                      │
└─────────────────────────────────────────────┘
```

---

## 📐 `ARCHITECTURE`

```
╔═══════════════════════════════════════════════════════════════╗
║                     PRESENTATION LAYER                         ║
║   ┌─────────────────────────────────────────────────────┐    ║
║   │  Angular Components                                  │    ║
║   │  ├─ MapComponent (Interactive SVG)                  │    ║
║   │  ├─ CountryDetailComponent (Data Display)           │    ║
║   │  ├─ SearchComponent (Query Interface)               │    ║
║   │  └─ HeaderComponent (Navigation)                    │    ║
║   └─────────────────────────────────────────────────────┘    ║
╚══════════════════════╦════════════════════════════════════════╝
                       ║
╔══════════════════════╩════════════════════════════════════════╗
║                     SERVICE LAYER                              ║
║   ┌─────────────────────────────────────────────────────┐    ║
║   │  @Injectable Services                                │    ║
║   │  ├─ CountryService (API Communication)              │    ║
║   │  ├─ MapService (SVG Interaction Logic)              │    ║
║   │  └─ DataCacheService (Performance Optimization)     │    ║
║   └─────────────────────────────────────────────────────┘    ║
╚══════════════════════╦════════════════════════════════════════╝
                       ║
╔══════════════════════╩════════════════════════════════════════╗
║                     HTTP CLIENT LAYER                          ║
║   ┌─────────────────────────────────────────────────────┐    ║
║   │  Angular HttpClient                                  │    ║
║   │  ├─ Observable-based requests                        │    ║
║   │  ├─ Interceptors (error handling, caching)          │    ║
║   │  └─ Header management                               │    ║
║   └─────────────────────────────────────────────────────┘    ║
╚══════════════════════╦════════════════════════════════════════╝
                       ║
╔══════════════════════╩════════════════════════════════════════╗
║                     EXTERNAL API                               ║
║   ┌─────────────────────────────────────────────────────┐    ║
║   │  REST Country Data API                               │    ║
║   │  Returns: Population, Capital, Languages,            │    ║
║   │           Currency, Region, Flag, etc.               │    ║
║   └─────────────────────────────────────────────────────┘    ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 💾 `DATA_FLOW`

### User Interaction → Data Display

```typescript
// 1. User clicks country on map
@HostListener('click', ['$event'])
onMapClick(event: MouseEvent) {
  const countryCode = this.getCountryCode(event.target);
  this.loadCountryData(countryCode);
}

// 2. Service fetches data from API
@Injectable()
export class CountryService {
  getCountryByCode(code: string): Observable<Country> {
    return this.http.get<Country>(
      `${API_URL}/alpha/${code}`
    ).pipe(
      map(data => this.transformCountryData(data)),
      catchError(err => this.handleError(err))
    );
  }
}

// 3. Component receives and displays data
this.countryService.getCountryByCode(code)
  .subscribe({
    next: (country) => {
      this.selectedCountry = country;
      this.displayCountryInfo(country);
    },
    error: (err) => this.showErrorMessage(err)
  });
```

### Country Data Model

```typescript
interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  population: number;
  region: string;
  subregion: string;
  languages: { [key: string]: string };
  currencies: { [key: string]: Currency };
  flags: {
    png: string;
    svg: string;
  };
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  area: number;
  borders: string[];
}
```

---

## ⚙️ `INSTALLATION`

### Prerequisites

```bash
# Node.js & npm
$ node -v  # v18.0.0+
$ npm -v   # v9.0.0+

# Angular CLI (global install)
$ npm install -g @angular/cli@20.0.4
```

### Setup & Launch

```bash
# Clone repository
$ git clone <repository-url>
$ cd javascript-programming

# Switch to implementation branch
$ git checkout Working

# Install dependencies
$ npm install

# Start development server
$ ng serve

# Application available at:
# http://localhost:4200
```

### Production Build

```bash
# Build optimized production bundle
$ ng build --configuration production

# Output: dist/country-info/
# Deploy to hosting (Netlify, Vercel, Firebase, etc.)
```

---

## 🎮 `USAGE`

### Interactive Map Workflow

```
1. Application loads → SVG world map renders
2. User hovers over country → Visual highlight
3. User clicks country → API request triggered
4. Loading spinner displays
5. Country data fetched → Displayed in panel
6. User can:
   ├─ View detailed information
   ├─ See country flag
   ├─ Check population & area stats
   ├─ Explore languages & currencies
   └─ Access external map links
```

### Key Interactions

#### **Country Selection**
```
Click any country on the map
→ Displays: Name, Capital, Population, Region
→ Additional: Languages, Currencies, Flag
```

#### **Data Exploration**
```
Scroll through country details
→ Population statistics
→ Geographic information
→ Cultural data (languages)
→ Economic info (currencies)
```

#### **Error Handling**
```
If API fails or country not found:
→ User-friendly error message
→ Fallback UI state
→ Retry mechanism
```

---

## 🎯 `TECHNICAL_HIGHLIGHTS`

### Angular 20 Features

```typescript
// Standalone Components (Modern Angular)
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent { }

// Signal-based State (Angular 20)
import { signal, computed } from '@angular/core';

selectedCountry = signal<Country | null>(null);
isLoading = signal(false);
errorMessage = signal('');

countryName = computed(() => 
  this.selectedCountry()?.name.common ?? 'Select a country'
);
```

### RxJS Reactive Patterns

```typescript
// Debounced search with operators
searchCountry$ = this.searchInput.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.countryService.search(term)),
  catchError(() => of([]))
);

// Combining multiple API calls
forkJoin({
  country: this.getCountryData(code),
  weather: this.getWeatherData(code),
  news: this.getNewsData(code)
}).subscribe(results => {
  // All data loaded simultaneously
});
```

### TypeScript Advanced Types

```typescript
// Type guards
function isCountry(obj: any): obj is Country {
  return 'name' in obj && 'capital' in obj;
}

// Utility types
type CountryPreview = Pick<Country, 'name' | 'flag' | 'capital'>;
type ReadonlyCountry = Readonly<Country>;

// Generic service
class ApiService<T> {
  get(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`);
  }
}
```

---

## 📊 `PROJECT_METRICS`

```yaml
Total Commits: 7
  ├─ Feature implementations: 5
  └─ Configuration & setup: 2

Angular Version: 20.0.4
TypeScript Version: 5.3.3
RxJS Version: 7.8.2

Components: 4+
  ├─ MapComponent
  ├─ CountryDetailComponent
  ├─ SearchComponent
  └─ HeaderComponent

Services: 2+
  ├─ CountryService (API)
  └─ MapService (Interaction)

API Integration: RESTful
Build System: Angular CLI
Bundle Size: Optimized with lazy loading
```

---

## 🧪 `DEVELOPMENT`

### Available Scripts

```bash
# Development server with live reload
$ ng serve
→ http://localhost:4200

# Run unit tests (Jasmine/Karma)
$ ng test

# Run e2e tests
$ ng e2e

# Linting
$ ng lint

# Build for production
$ ng build --prod
```

### Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── map/
│   │   │   ├── map.component.ts
│   │   │   ├── map.component.html
│   │   │   └── map.component.css
│   │   └── country-detail/
│   │       ├── country-detail.component.ts
│   │       └── country-detail.component.html
│   ├── services/
│   │   ├── country.service.ts
│   │   └── map.service.ts
│   ├── models/
│   │   └── country.model.ts
│   ├── app.component.ts
│   └── app.config.ts
├── assets/
│   └── world-map.svg
├── index.html
└── main.ts
```

---

## 🔬 `ACADEMIC_CONTEXT`

This project represents academic exploration of modern JavaScript development and frontend engineering. Key learning objectives:

- **Framework Mastery**: Deep dive into Angular ecosystem
- **TypeScript Proficiency**: Type-safe application development
- **Reactive Programming**: RxJS observables and operators
- **API Integration**: RESTful service consumption
- **Component Architecture**: Modular, reusable components
- **State Management**: Reactive state patterns
- **Build Optimization**: Production-ready bundling
- **User Experience**: Interactive data visualization

**Research Focus**: Investigating how modern JavaScript frameworks enable creation of data-driven, interactive web applications with emphasis on performance, maintainability, and user engagement.

---

## 🌐 `API_REFERENCE`

### Country Data API

```http
GET /alpha/{countryCode}
Response: Detailed country information

GET /name/{countryName}
Response: Search by country name

GET /region/{region}
Response: Countries by geographic region

GET /all
Response: All countries data
```

### Response Example

```json
{
  "name": {
    "common": "Brazil",
    "official": "Federative Republic of Brazil"
  },
  "capital": ["Brasília"],
  "population": 212559417,
  "region": "Americas",
  "languages": {
    "por": "Portuguese"
  },
  "currencies": {
    "BRL": {
      "name": "Brazilian real",
      "symbol": "R$"
    }
  }
}
```

---

## 📜 `LICENSE_&_USAGE`

```
┌─────────────────────────────────────────────────────────┐
│  ACADEMIC PROJECT - EDUCATIONAL PURPOSES ONLY            │
│                                                          │
│  This application demonstrates modern JavaScript/        │
│  Angular development techniques and serves as a          │
│  portfolio piece showcasing frontend engineering.        │
│                                                          │
│  ⚠️  DO NOT reproduce for academic submissions          │
│  ⚠️  Use as reference/learning resource only            │
│  ✓  Available for portfolio review                      │
│  ✓  Open to technical discussion                        │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 `AUTHOR`

**Wallace Mendoza** — *Frontend Developer*

Specializing in Angular, TypeScript, and modern JavaScript frameworks for building interactive, data-driven web applications.

[GitHub](https://github.com/wallacemendoza) • [Portfolio](#) • [LinkedIn](#)

---

<div align="center">

### `STACK_FINGERPRINT`

`ANGULAR` • `TYPESCRIPT` • `RXJS` • `REST_API` • `SVG` • `RESPONSIVE` • `SPA`

---

*Built with modern web technologies and reactive programming principles*

**[⬆ back to top](#world_map_explorer)**

</div>
