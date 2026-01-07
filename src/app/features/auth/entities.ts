export interface signUpInfo {
  name: string;
  email: string;
  contactNo: number;
  password: string;
  confirmPassword: string;
}

export enum SignupFormFields {
  Name = 'name',
  Email = 'email',
  ContactNo = 'contactNo',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}
