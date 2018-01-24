import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {

  dashboardForm: FormGroup;
  constructor( private dataservice: DataService) { }

  ngOnInit() {
    this.dashboardForm =new FormGroup({
          'firstName' : new FormControl(null,[Validators.required]),
          'lastName': new FormControl(null,[Validators.required]),
          'email':  new FormControl(null,[Validators.required, Validators.email]),
          'phoneNo':  new FormControl(null,[Validators.required, Validators.pattern(/^\d{10}$/)])
    })
  }
 onSubmit()
 {
   this.dataservice.AddData({
    firstName: this.dashboardForm.value["firstName"],
    lastName: this.dashboardForm.value["lastName"],
    email: this.dashboardForm.value["email"],
    phone: "+61"+ this.dashboardForm.value["phoneNo"]})
    this.dashboardForm.reset();
 }
}
