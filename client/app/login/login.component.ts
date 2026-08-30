import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  form,
  FormField,
  FormRoot,
  required,
  email,
  minLength,
  maxLength,
} from '@angular/forms/signals';

import { AuthService } from '../services/auth.service';
import { ToastComponent } from '../shared/toast/toast.component';

interface LoginModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormField, FormRoot, ToastComponent],
})
export class LoginComponent implements OnInit {
  private auth = inject(AuthService);
  private router = inject(Router);

  private model = signal<LoginModel>({ email: '', password: '' });

  loginForm = form(this.model, (loginForm) => {
    required(loginForm.email);
    email(loginForm.email);
    minLength(loginForm.email, 3);
    maxLength(loginForm.email, 100);
    required(loginForm.password);
    minLength(loginForm.password, 6);
  });

  ngOnInit(): void {
    if (this.auth.loggedIn()) {
      this.router.navigate(['/']);
    }
  }

  emailInvalid(): boolean {
    const email = this.loginForm.email();
    return email.touched() && !email.valid();
  }

  passwordInvalid(): boolean {
    const password = this.loginForm.password();
    return password.touched() && !password.valid();
  }

  login(): void {
    this.auth.login(this.loginForm().value());
  }
}
