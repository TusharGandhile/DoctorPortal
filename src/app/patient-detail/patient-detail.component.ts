import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent implements OnInit {
id:any;
patients:any=[];
pat:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(localStorage.getItem('Patients')){
      this.patients = JSON.parse(localStorage.getItem('Patients')!);
    }
    this.pat=this.patients[this.id];
  }

}
