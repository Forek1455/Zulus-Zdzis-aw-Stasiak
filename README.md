# Zulus

Ten projekt został wygenerowany przy użyciu [Angular CLI](https://github.com/angular/angular-cli) w wersji 21.0.2.

---

## 🇵🇱 Dokumentacja po polsku

### O projekcie
Strona została stworzona dla firmy **Zulus**, która świadczy szeroki wachlarz usług, w tym:
* **BHP**: Kompleksowe usługi z zakresu bezpieczeństwa i higieny pracy.
* **Detailing pojazdów**: Profesjonalna pielęgnacja i renowacja samochodów.
* **Sprzątanie**: Usługi utrzymania czystości.
* **Tereny zielone**: Projektowanie i pielęgnacja ogrodów oraz obszarów zielonych.

### Hosting i Backend
Projekt wykorzystuje infrastrukturę **Firebase**:
* **Firebase Hosting**: Serwowanie aplikacji Angularowej.
* **Cloud Firestore**: NoSQL-owa baza danych przechowująca posty firmowe i aktualności.
* **Firebase Authentication**: System logowania dla administratora strony (zarządzanie treścią).

### Funkcjonalności
* **System Postów**: Możliwość dodawania i edycji treści (np. portfolio realizacji) bezpośrednio z poziomu strony.
* **Logowanie**: Zabezpieczony proces autentykacji po stronie klienta.

### Komendy deweloperskie
* `ng serve`: Uruchamia serwer lokalny (`http://localhost:4200/`).
* `ng build`: Kompiluje projekt do folderu produkcyjnego `dist/`.
* `firebase deploy`: Publikacja najnowszej wersji aplikacji na serwerze Firebase.

---

## 🇬🇧 English Documentation

### About the Project
This website was developed for **Zulus**, a multi-service company specializing in:
* **Health and Safety (BHP)**: Comprehensive occupational health and safety services.
* **Vehicle Detailing**: Professional car care and restoration.
* **Cleaning Services**: General maintenance and cleaning solutions.
* **Green Spaces**: Management and maintenance of gardens and landscape areas.

### Hosting & Backend
The project is powered by **Firebase**:
* **Firebase Hosting**: For delivering the Angular application.
* **Cloud Firestore**: A NoSQL database for storing company posts and updates.
* **Firebase Authentication**: Secure login system for site administration and content management.

### Features
* **Post System**: Allows for adding and managing content (e.g., service portfolios) directly on the site.
* **Authentication**: Restricted access to the management dashboard.

### Development Commands
* `ng serve`: Starts the local development server (`http://localhost:4200/`).
* `ng build`: Compiles the project into the `dist/` directory.
* `firebase deploy`: Deploys the application to the live production environment.

---

## Technical Details (Common)

### Code scaffolding
To generate a new component, run:
```bash
ng generate component component-name

## Adres stony: https://zulus-62570.web.app