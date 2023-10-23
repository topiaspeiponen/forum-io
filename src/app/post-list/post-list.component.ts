import { Component } from '@angular/core';
import { posts } from '../posts';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent {
  postList = posts;
}
