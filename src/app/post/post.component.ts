import { Component, Input } from '@angular/core';
import { FullPost, Post } from '../types';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})
export class PostComponent {
  post: FullPost = {} as FullPost;
  commentForm = {
    creatorName: '',
    content: '',
  };

  @Input()
  set postId(postId: number) {
    this.apiService.getPostById(postId).subscribe((data) => {
      this.post = data;
    });
  }

  constructor(private apiService: ApiService) {}

  createComment = () => {
    if (!this.commentForm.creatorName || !this.commentForm.content) return;

    this.apiService.createComment({
      postId: this.post.id,
      creatorName: this.commentForm.creatorName,
      content: this.commentForm.content,
    }).subscribe((data) => {
      const responseBody = data.body;
      if (data.status == 201 && responseBody) {
        this.commentForm = {
          creatorName: '',
          content: '',
        };
        this.post.comments.unshift(responseBody);
      }
    });
  }
}
