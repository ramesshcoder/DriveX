import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupFormFields, signUpInfo } from '../entities';
import { AuthsService, IIDto } from '../Providers/auths-service';
import { delay, finalize, tap } from 'rxjs';
import { LoaderService } from '../../../core/Providers/loader-service';
import { ToastService } from '../../../core/Providers/toast-service';

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

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthsService,
    private _loaderService: LoaderService,
    private _toastService: ToastService
  ) {
    this.signupForm = this._fb.group({
      [this.SignupFormFields.Name]: ['', Validators.required],
      [this.SignupFormFields.Email]: ['', [Validators.required, Validators.email]],
      [this.SignupFormFields.Password]: ['', Validators.required],
      [this.SignupFormFields.ConfirmPassword]: ['', Validators.required],
      [this.SignupFormFields.ContactNo]: [null],
    });
  }

  protected signup(): void {
    this._toastService.success('Signup successful!');

   

    if (
      this.signupForm.get(this.SignupFormFields.Password)?.value !==
      this.signupForm.get(this.SignupFormFields.ConfirmPassword)?.value
    ) {
    }
    const payload: signUpInfo = {
      name: this.signupForm.get(this.SignupFormFields.Name)?.value,
      email: this.signupForm.get(this.SignupFormFields.Email)?.value,
      contactNo: this.signupForm.get(this.SignupFormFields.ContactNo)?.value,
      password: this.signupForm.get(this.SignupFormFields.Password)?.value,
      confirmPassword: this.signupForm.get(this.SignupFormFields.ConfirmPassword)?.value,
    };

    this._loaderService.show();

    this._authService.signUp(payload).subscribe({
      next: () => {
        this._toastService.success('Signup successful!');
      },
      error: () => {
        this._toastService.error('Signup failed. Try again.');
      },
    });
  }
}
