import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InterestsService {

   constructor(private http: Http) { }

    // Get all posts from the API
  getAllInterests() {
    return this.http.get('http://localhost:3000/interestapi')
      .map(res => res.json());
  }
  getById(id) {
    return this.http.get('https://guidemeesprit.herokuapp.com/interestapi/id/'+id)
      .map(res => res.json());
  }
  postInterest(inte){
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  	return this.http.post('https://guidemeesprit.herokuapp.com/interestapi',inte,options)
  	.map(res => res.json());
  }
  editInterest(inte,id){
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  	return this.http.put('https://guidemeesprit.herokuapp.com/interestapi/'+id,inte,options)
  	.map(res => res.json());
  }
  deleteInterest(id){
     return this.http.delete('https://guidemeesprit.herokuapp.com/interestapi/'+id)
      .map(res => res.json());
  }
  usersByInterest(label){
    return this.http.get('http://localhost:3000/api/usersByInterest/'+label)
    .map(res=> res.json());
  }
}
