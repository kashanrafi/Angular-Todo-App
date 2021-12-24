import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginMode: boolean = true;
  userform: FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userform = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }
  onModeSwitch(){ 
    this.loginMode = !this.loginMode;
  }
  get formControl() {
    return this.userform.controls;
  }


  onsubmit(){
    this.submitted = true;
    if (this.userform.valid) {
    console.log(this.userform.value);
    }
  }
}
