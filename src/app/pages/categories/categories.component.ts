import {Component,OnInit} from '@angular/core';
import {CategoriesService} from './categories.service';
@Component({
  selector: 'Categories',
  // template: `<strong>My page content here</strong>`
    templateUrl: './categories.component.html',

})
export class CategoriesComponent implements OnInit {
  categories: any[];

  constructor(private categoriesService : CategoriesService) {
  }

  ngOnInit() {
    this.categoriesService.loadCategories().subscribe(categories=>{this.categories=categories});
  }

}

