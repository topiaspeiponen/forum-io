import { Component } from '@angular/core';
import { Post } from '../types';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
