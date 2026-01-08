import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signUpInfo } from '../entities';

@Injectable({
  providedIn: 'root',
})
export class AuthsService {
  private get _api(): string {
    return 'http://localhost:3000/signUp';
  }

  constructor(private readonly _http: HttpClient) {}

  public signUp(user:signUpInfo): Observable<IIDto> {
    return this._http.post<IIDto>(this._api,user)
  }
}
export interface IIDto {
  ID: string;
  
}
