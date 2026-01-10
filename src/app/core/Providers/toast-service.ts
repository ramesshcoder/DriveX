import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastMessage } from './entities';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  private toastSubject = new Subject<ToastMessage>();
  toast$ = this.toastSubject.asObservable();

  success(message: string) {
    this.toastSubject.next({
      severity: 'success',
      summary: 'Success',
      detail: message
    });
  }

  error(message: string) {
    this.toastSubject.next({
      severity: 'error',
      summary: 'Error',
      detail: message
    });
  }

  info(message: string) {
    this.toastSubject.next({
      severity: 'info',
      summary: 'Info',
      detail: message
    });
  
  }
}
