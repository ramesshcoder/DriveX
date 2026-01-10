import { Component, signal } from '@angular/core';
import { ToastService } from './core/Providers/toast-service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('DriveX');

  private _toastSub!: Subscription;
   constructor(
    private readonly _toastService: ToastService,
    private readonly _messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._toastSub = this._toastService.toast$.subscribe(message => {
      this._messageService.add(message);
    });
  }

  ngOnDestroy(): void {
    this._toastSub?.unsubscribe();
  }
}
