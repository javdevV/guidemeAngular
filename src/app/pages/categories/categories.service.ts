import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class CategoriesService {

  constructor(private http : Http) { }

  loadCategories() {
    return this.http.get('https://guidemeesprit.herokuapp.com/api/categories')
      .map(res => res.json());
  }

}
