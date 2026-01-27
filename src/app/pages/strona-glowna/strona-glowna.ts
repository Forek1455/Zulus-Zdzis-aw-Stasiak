import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, tap } from 'rxjs';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strona-glowna',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './strona-glowna.html',
  styleUrl: './strona-glowna.css',
})
export class StronaGlowna implements OnInit {
  private firestore = inject(Firestore);
  private auth = inject(Auth);
  private router = inject(Router);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private cdr = inject(ChangeDetectorRef);

  name: string = "";
  message: string = "";
  email: string = "";
  
  // Pobieranie danych z Firebase
  posts$: Observable<any[]> = collectionData(
    collection(this.firestore, 'posts'), 
    { idField: 'id' }
  ).pipe(
    tap(data => {
      console.log('Dane odebrane z Firebase:', data);
      // Wymuszamy odświeżenie widoku
      setTimeout(() => this.cdr.detectChanges(), 0);
    })
  );

  constructor() {}

  trackByFn(index: number, item: any) {
    return item.id;
  }

  wyslijMaila() {
    const mojEmail = "pilarczyk-miko@o2.pl";
    const temat = encodeURIComponent(`Zapytanie od: ${this.name}`);
    const tresc = encodeURIComponent(
      `Imię i Nazwisko: ${this.name}\n` +
      `Email kontaktowy: ${this.email}\n\n` +
      `Wiadomość:\n${this.message}`
    );
    const mailtoLink = `mailto:${mojEmail}?subject=${temat}&body=${tresc}`; 
    window.location.href = mailtoLink;
  }

  ngOnInit(): void {

  }
}