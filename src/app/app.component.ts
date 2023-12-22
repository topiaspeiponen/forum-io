import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forum-io';
  createPostModalOpen = false;
  
  openCreatePostModal = () => {
    this.createPostModalOpen = true;
  }
  closeCreatePostModal = () => {
    this.createPostModalOpen = false;
  }
}
