import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormUpdateService {
  public formUpdateEvent: Subject<any> = new Subject();

  constructor() { }
}
