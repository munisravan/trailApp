import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-show-person-data',
  templateUrl: './show-person-data.component.html',
  styleUrls: ['./show-person-data.component.css']
})
export class ShowPersonDataComponent implements OnInit {

  dataSource = new UserDataSource();
  displayedColumns = ['firstName', 'lastName', 'email', 'phone'];
  constructor() { }

  ngOnInit() {
  }

}
export class UserDataSource extends DataSource<any> {

  data = [
    {   firstName: 'sravan',
    LastName: 'Rayarapu',
    email: 'admin@eezeeorder.com',
    phone: '+61 0434567890'},

  ];
  constructor() {
    super();
  }

  connect(): Observable<any[]> {
    return Observable.of(this.data);
  }
  disconnect() {
  }
}
