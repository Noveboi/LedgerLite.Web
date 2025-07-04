import { Component, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RegisterRequest } from '../../register.types';
import { RegisterValidators } from '../../register.validators';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, MatFormField, MatInputModule, MatButtonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required]),
    username: new FormControl(''), 
    firstName: new FormControl(''),
    lastName: new FormControl('')
  }, {
    validators: [RegisterValidators.confirmPassword]
  })

  registerStates = RegisterStatus;
  status = signal(RegisterStatus.SubmittingRequiredCredentials);
  register = output<RegisterRequest>();

  nextState() {
    if (this.status() >= 1) 
      return;
    this.status.update(x => x + 1);
  }

  previousState() {
    if (this.status() <= 0)
      return;

    this.status.update(x => x - 1);
  }

  invokeRegister(e?: SubmitEvent) {
    e?.preventDefault()
    
    const form = this.registerForm;
    if (form.invalid) {
      return;
    }

    const fields = form.value;
    
    this.register.emit({
      email: fields.email!,
      password: fields.password!,
      username: fields.username,
      firstName: fields.firstName,
      lastName: fields.lastName
    })
  }
}

enum RegisterStatus {
  SubmittingRequiredCredentials = 0,
  SubmittingAdditionalInformation = 1
}