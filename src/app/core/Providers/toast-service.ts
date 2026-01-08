import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastMessage } from './entities';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();

  toast$ = this.toastSubject.asObservable();

  public success(message: string) {
    this.toastSubject.next({ type: 'success', message });
  }

  public error(message: string) {
    this.toastSubject.next({ type: 'error', message });
  }

  public info(message: string) {
    this.toastSubject.next({ type: 'info', message });
  }
}
