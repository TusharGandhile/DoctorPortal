import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  patientForm!: FormGroup;
  patients:any=[];
  elements: any = [];
  p=1;
  term:any;
  headElements = ['#', 'Name', 'Email', 'Age', 'Gender'];
  Name: string = 'name';
  email:string = 'email';
  reverse: boolean = false;
  reverseId: boolean = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    if(localStorage.getItem('Patients')){
      this.patients = JSON.parse(localStorage.getItem('Patients')!)
    }
    this.patientForm = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required]
    });
  }
  deletePatient(i:any){
    this.patients.splice(i,1);
    localStorage.setItem('Patients', JSON.stringify(this.patients));
  }
  
  OnSubmit(){
    this.patients.push(this.patientForm.value);
    localStorage.setItem('Patients', JSON.stringify(this.patients));
    this.patientForm.reset();
  }

  searchPatient(e:any){
    console.log(e.target.value);
    if(e.target.value!=null){
    this.patients=this.patients.filter((one:any)=>one.name==e.target.value)
    console.log(this.patients);
    
    }   
  }

  setOrder(value: string) {
    if (this.Name === value || this.email === value) {
      this.reverse = !this.reverse;
    }
    this.Name = value;
    this.email = value;
  }
   
  reverseById(){
   this.reverseId = !this.reverseId;
   this.patients= this.patients.reverse()
  }
}
