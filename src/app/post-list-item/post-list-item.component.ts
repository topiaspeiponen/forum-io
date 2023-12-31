import { Component, Input } from '@angular/core';
import { Post } from '../types';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
})
export class PostListItemComponent {
  @Input({ required: true }) post : Post = {} as Post;
}
