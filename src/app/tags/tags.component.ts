import {Component, OnInit} from '@angular/core';
import {TagsServiceService} from "./tags-service.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: any[];

  constructor(private tagsService: TagsServiceService) {
  }

  ngOnInit() {
    this.tagsService.loadTags().subscribe(tags => this.tags = tags);
  }

}
