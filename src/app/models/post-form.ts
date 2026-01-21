import { Component, inject } from '@angular/core'; 
import { 
  Firestore, 
  collection, 
  addDoc, 
  serverTimestamp, 
  collectionData, 
  query, 
  orderBy, 
  doc,        // <--- Dodano
  deleteDoc   // <--- Dodano
} from '@angular/fire/firestore';
import { Auth, user, signOut } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { RouterModule } from '@angular/router'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], 
  templateUrl: './post-form.html',
  styleUrl: './post-form.css'
})
export class PostFormComponent {
  private firestore = inject(Firestore);
  private auth = inject(Auth);

  post = {
    title: '',
    content: ''
  };

  posts$: Observable<any[]>;
  currentUser$ = user(this.auth);
  
  isAdmin$ = this.currentUser$.pipe(
    map(u => u && u.uid === 'vqgxVnm2ujh8pnUXlPKzw29VVsm2')
  );

  constructor() {
    const postsCollection = collection(this.firestore, 'posts');
    const postsQuery = query(postsCollection, orderBy('createdAt', 'desc'));
    
    // Kluczowe: idField: 'id' sprawia, że w obiekcie p otrzymamy p.id
    this.posts$ = collectionData(postsQuery, { idField: 'id' }) as Observable<any[]>;
  }

  async onSubmit() {
    const postsCollection = collection(this.firestore, 'posts');
    try {
      await addDoc(postsCollection, {
        ...this.post,
        createdAt: serverTimestamp()
      });
      alert('Wpis dodany!');
      this.post = { title: '', content: '' };
    } catch (error: any) {
      alert('Błąd: ' + error.message);
    }
  }

  // NOWA FUNKCJA USUWANIA
  async deletePost(postId: string) {
    if (confirm('Czy na pewno chcesz usunąć ten wpis?')) {
      try {
        const docRef = doc(this.firestore, `posts/${postId}`);
        await deleteDoc(docRef);
        console.log('Usunięto post o ID:', postId);
      } catch (error: any) {
        alert('Błąd podczas usuwania: ' + error.message);
      }
    }
  }

  async logout() {
    await signOut(this.auth);
    alert('Wylogowano');
  }
}