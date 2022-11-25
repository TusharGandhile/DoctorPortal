import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;
users:any=[];
activeUser:any;
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    localStorage.removeItem("activeUser");
    if(localStorage.getItem('Users')){
      this.users = JSON.parse(localStorage.getItem('Users')!);
    }
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }
  
  get password() {
    return this.loginForm.get('password') as FormControl;
  }
  
  OnSubmit(){
  this.activeUser=this.users.filter((user:any) => this.loginForm.value.email === user.email && this.loginForm.value.password === user.password);
    if(this.activeUser[0]!== null) {
    localStorage.setItem('activeUser', this.activeUser[0].email);
    this.router.navigate(['home']);
  }
}

}
