import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registrationForm!:FormGroup;
  users:any=[];
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    localStorage.removeItem("activeUser");
    if(localStorage.getItem('Users')){
      this.users=JSON.parse(localStorage.getItem('Users')!);
    }
    this.registrationForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6),this.nospaceallowed]]
    });
  }

  get firstName() {
    return this.registrationForm.get('email') as FormControl;
  }

  get lastName() {
    return this.registrationForm.get('email') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  nospaceallowed(control:FormControl){
    console.log(control.value);
    if(control.value != null && control.value.indexOf(' ')!=-1){
      return {nospaceallowed:true};
    }
    return null;
  }

  OnSubmit(){
  this.users.push(this.registrationForm.value);
  console.log(this.users);
  localStorage.setItem('Users', JSON.stringify(this.users));
  this.registrationForm.reset();
  }
}
