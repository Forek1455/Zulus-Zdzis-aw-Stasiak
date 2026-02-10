import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Dodaj te dwa importy tutaj:
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
ngOnInit() {
  const host = window.location.hostname;
  
  if (host !== 'zulus-uslugi-konin.eu' && host !== 'localhost' && host !== '127.0.0.1') {
    window.location.replace('https://zulus-uslugi-konin.eu' + window.location.pathname);
  }
}
}