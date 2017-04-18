import {Component,OnInit} from '@angular/core';
import {TagsService} from './tags.service';
@Component({
  selector: 'tags',
  // template: `<strong>My page content here</strong>`
    templateUrl: './tags.component.html',

})
export class TagsComponent implements OnInit {
  tags: any[];

  constructor(private tagsService : TagsService) {
  }

  ngOnInit() {
    this.tagsService.loadTags().subscribe(tags=>{this.tags=tags});
  }

}

