import { Component, Input } from '@angular/core';
import { Comment } from '../types';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
})
export class CommentListComponent {
  @Input({ required: true }) comments: Comment[] = [];
}
