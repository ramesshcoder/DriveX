import { Component } from '@angular/core';
import { LoaderService } from '../../../core/Providers/loader-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: false,
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader {
  
  public loading$!: Observable<boolean>;

  constructor(private readonly _loaderService: LoaderService) {
    this.loading$ = this._loaderService.loading$;
  }
}
