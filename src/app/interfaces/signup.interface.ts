export interface User {
  firstName: string;
  LastName: string;
  email: string | null;
  password: string;
  confirmPassword: string;
  firstNameError?: string;
  LastNameError?: string;
  emailError?: string;
  passwordError?: string;
  confirmPasswordError?: string;
}
