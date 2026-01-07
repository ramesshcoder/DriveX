import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupFormFields, signUpInfo } from '../entities';
import { AuthsService, IIDto } from '../Providers/auths-service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class SignUp {
  protected signupForm: FormGroup;
  protected SignupFormFields = SignupFormFields;
  protected passwordMismatched: boolean = false;

  constructor(private readonly _fb: FormBuilder, private readonly _authService: AuthsService) {
    this.signupForm = this._fb.group({
      [this.SignupFormFields.Name]: ['', Validators.required],
      [this.SignupFormFields.Email]: ['', [Validators.required, Validators.email]],
      [this.SignupFormFields.Password]: ['', Validators.required],
      [this.SignupFormFields.ConfirmPassword]: ['', Validators.required],
      [this.SignupFormFields.ContactNo]: [null],
    });
  }

  public signup(): void {
    if (this.signupForm.invalid) {
      alert('fill all details properly');
      return;
    }
    const payload: signUpInfo = {
      name: this.signupForm.get(this.SignupFormFields.Name)?.value,
      email: this.signupForm.get(this.SignupFormFields.Email)?.value,
      contactNo: this.signupForm.get(this.SignupFormFields.ContactNo)?.value,
      password: this.signupForm.get(this.SignupFormFields.Password)?.value,
      confirmPassword: this.signupForm.get(this.SignupFormFields.ConfirmPassword)?.value,
    };

    this._authService.signUp(payload).pipe(
      tap((res: IIDto) => {
        console.log(res);
      })
    ).subscribe();
  }
}
