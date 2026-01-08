import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../Providers/loader-service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private readonly _loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    this._loaderService.show();

    return next.handle(request).pipe(
      finalize(() => {
        this._loaderService.hide();
      })
    );
  }
}