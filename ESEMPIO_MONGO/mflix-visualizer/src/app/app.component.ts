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
    this.obs = this.http.get("TUO_URL_PER_SCARICARE_10_FILM");
    this.obs.subscribe(this.getData);
 }
    getData = (data) => {
    this.results = data;
 }
}
