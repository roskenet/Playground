import { Component } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name: string;

//  constructor(private http: Http) {
  constructor() {
//    http.get('http://192.168.99.100:30100/greet/Felix')
//        .map(res => res.json())
//        .subscribe(val => this.name = val['name']);
        // .subscribe(val => console.log(val['name']));

  }
}
