import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="login-container">
      <h2>Logowanie Administratora</h2>
      <input [(ngModel)]="email" type="email" placeholder="Email">
      <input [(ngModel)]="password" type="password" placeholder="Hasło">
      <button (click)="onLogin()">Zaloguj się</button>
    </div>
  `
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  async onLogin() {
    try {
      await signInWithEmailAndPassword(this.auth, this.email, this.password);
      alert('Zalogowano pomyślnie!');
      this.router.navigate(['/dodaj-wpis']); 
    } catch (error) {
      console.error('Błąd logowania:', error);
      alert('Niepoprawne dane logowania');
    }
  }
}