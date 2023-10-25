import { Component, Input } from '@angular/core';
import { FullPost, Post } from '../types';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  post: FullPost = {} as FullPost;

  @Input()
  set postId(postId: number) {
    this.apiService.getPostById(postId).subscribe((data) => {
      console.log(data);
      this.post = data;
    });
  }

  constructor(private apiService: ApiService) {}
}
