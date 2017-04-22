import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InterestsService {

   constructor(private http: Http) { }

    // Get all posts from the API
  getAllInterests() {
  /*   return this.http.get('https://guidemeesprit.herokuapp.com/interestapi') */
  return this.http.get('http://localhost:9000/interestapi')
      .map(res => res.json());    
/*    return new Promise((resolve, reject) => {
         this.http.get('http://localhost:9000/interestapi')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });*/
  }
getAllInterests1() {
   return new Promise((resolve, reject) => {
         this.http.get('http://localhost:9000/interestapi')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
        });
      }
  getById(id) {
    return this.http.get('http://localhost:9000/interestapi/id/'+id)
      .map(res => res.json());
  }
  postInterest(inte){
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  	return this.http.post('http://localhost:9000/interestapi',inte,options)
  	.map(res => res.json());
  }
  editInterest(inte,id){
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  	return this.http.put('http://localhost:9000/interestapi/'+id,inte,options)
  	.map(res => res.json());
  }
  deleteInterest(id){
     return this.http.delete('http://localhost:9000/interestapi/'+id)
      .map(res => res.json());
  }
  usersByInterest(label){
/*    return this.http.get('https://guidemeesprit.herokuapp.com/api/usersByInterest/'+label)*/
    return this.http.get('http://localhost:9000/api/usersByInterest/'+label)
    .map(res=> res.json());
  }
   usersByInterest1(label){
   return new Promise((resolve, reject) => {
        this.http.get('http://localhost:9000/api/usersByInterest/'+label)
          .map(res => (res.json().length*1000))
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
}

}