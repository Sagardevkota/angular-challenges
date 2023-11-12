import { Injectable } from '@angular/core';
import { Teacher } from '../model/teacher.model';
import { AbstractStore } from './abstract.store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherStore extends AbstractStore<Teacher> {
  public get teachers$(): Observable<Teacher[]> {
    return this.entities$;
  }
}
