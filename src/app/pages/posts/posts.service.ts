import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

 
  getAllPosts() {
    return this.http.get('https://guidemeesprit.herokuapp.com/api/beacons')
      .map(res => res.json());
  }
getPostById(id) {
    return this.http.get('https://guidemeesprit.herokuapp.com/api/beacons/'+id)
      .map(res => res.json());
  }


AddBeacon(data) {
    return new Promise((resolve, reject) => {
        this.http.post('https://guidemeesprit.herokuapp.com/api/beacons', data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }




deleteBeacon(id){
 return new Promise((resolve, reject) => {
        this.http.delete('https://guidemeesprit.herokuapp.com/api/beacons/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });


}



}