import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User, LoginRequest, RegisterRequest } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly USER_KEY = 'ez_user';
  private user$ = new BehaviorSubject<User | null>(this.loadUser());

  getUser(): Observable<User | null> {
    return this.user$.asObservable();
  }

  getCurrentUser(): User | null {
    return this.user$.value;
  }

  isLoggedIn(): boolean {
    return this.user$.value !== null;
  }

  login(req: LoginRequest): Observable<User> {
    const user: User = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: req.email,
      phone: '+1 (555) 123-4567',
      createdAt: '2024-01-15'
    };
    this.persist(user);
    return of(user).pipe(delay(600));
  }

  register(req: RegisterRequest): Observable<User> {
    const user: User = {
      id: Date.now(),
      firstName: req.firstName,
      lastName: req.lastName,
      email: req.email,
      createdAt: new Date().toISOString()
    };
    this.persist(user);
    return of(user).pipe(delay(600));
  }

  updateProfile(updates: Partial<User>): Observable<User> {
    const current = this.user$.value;
    if (!current) throw new Error('Not authenticated');
    const updated = { ...current, ...updates };
    this.persist(updated);
    return of(updated).pipe(delay(400));
  }

  logout(): void {
    this.user$.next(null);
    localStorage.removeItem(this.USER_KEY);
  }

  private persist(user: User): void {
    this.user$.next(user);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  private loadUser(): User | null {
    try {
      const saved = localStorage.getItem(this.USER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }
}
