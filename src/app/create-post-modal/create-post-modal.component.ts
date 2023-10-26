import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.component.html',
})
export class CreatePostModalComponent {
  @Input({required: true}) modalOpen = false;
  title = '';
  content = '';
  creatorName = '';

  @Output() closeModalEvent = new EventEmitter<void>();

  constructor(private apiService: ApiService, private router: Router) {
  }
  
  closeModal() {
    this.closeModalEvent.emit();
  }

  createPost() {
    if (!this.title || !this.content || !this.creatorName) return;
    this.apiService.createPost({title: this.title, content: this.content}).subscribe((response) => {
      if (response.status == 201) {
        this.closeModalEvent.emit();
        this.title = '';
        this.content = '';
        this.creatorName = '';
        this.router.navigate(['/post', response.body]);
      }
    });
  }
}
