import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

 
  getAllPosts() {
    return this.http.get('http://localhost:9000/api/beacons')
      .map(res => res.json());
  }
getPostById(id) {
    return this.http.get('http://localhost:9000/api/beacons/'+id)
      .map(res => res.json());
  }


AddBeacon(data) {
    return new Promise((resolve, reject) => {
        this.http.post('http://localhost:9000/api/beacons', data)
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
        this.http.delete('http://localhost:9000/api/beacons/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });


}








updateBeacon(id,data) {
    return new Promise((resolve, reject) => {
        this.http.put('http://localhost:9000/api/beacons/'+id, data)
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }





CountBeacons(){

return this.http.get('https://api.mlab.com/api/1/databases/guideme/collections/ibeacons?q={%22state%22:%22success%22}&c=true&apiKey=TneUVlO-3l9pX9hkby6H0N_k4sz72LWi')
      .map(res => res.json());


  
}


CountAllBeacons(){

return this.http.get('https://api.mlab.com/api/1/databases/guideme/collections/ibeacons?c=true&apiKey=TneUVlO-3l9pX9hkby6H0N_k4sz72LWi')
      .map(res => res.json());


  
}


// Beaconsbyplace(address){

// return this.http.get('https://api.mlab.com/api/1/databases/guideme/collections/ibeacons?q={%22address%22:address}&c=true&apiKey=TneUVlO-3l9pX9hkby6H0N_k4sz72LWi')
//       .map(res => res.json());


  
// }



}