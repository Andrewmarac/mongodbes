import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'mflix-visualizer';
 results : Object[];
 obs : Observable<object>;
 constructor(private http : HttpClient, private sanitizer: DomSanitizer){}
 load10Movies()
 {
    this.obs = this.http.get("https://3000-f441531b-1e97-43b0-851d-5453e3955f89.ws-eu01.gitpod.io/movie");
    this.obs.subscribe(this.getData);
 }
    getData = (data) => {
    this.results = data;
 }
 photoURL(urltoSanitize) {
    console.log(urltoSanitize);
    return this.sanitizer.bypassSecurityTrustUrl(urltoSanitize);
}

}
