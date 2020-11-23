import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'mflix-visualizer';
 results : Object[];
 obs : Observable<object>;
 constructor(private http : HttpClient){}
 load10Movies()
 {
    this.obs = this.http.get("https://3000-e1838874-5d49-4c8c-b1df-3ca2e124eccf.ws-eu01.gitpod.io/movie");
    this.obs.subscribe(this.getData);
 }
    getData = (data) => {
    this.results = data;
 }
}
