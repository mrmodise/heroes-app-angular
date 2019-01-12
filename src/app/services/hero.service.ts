import { Injectable } from '@angular/core';
import {HEROES} from '../models/mock-heroes';
import {Observable, of} from 'rxjs';
import {Hero} from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
