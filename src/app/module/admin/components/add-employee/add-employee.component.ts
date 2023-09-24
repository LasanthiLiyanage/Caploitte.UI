import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  employeeForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  model: NgbDateStruct | undefined;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      salary: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      joinDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.employeeForm.valid) {
      // Submit data to the database here
      console.log('Employee details submitted:', this.employeeForm.value);
    }
  }

  resetForm() {
    this.employeeForm.reset();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
