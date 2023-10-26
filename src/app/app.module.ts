import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';
import { FormsModule } from '@angular/forms';

const appRoutes = [
  { path: '', component: PostListComponent },
  { path: 'post/:postId', component: PostComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    PostListItemComponent,
    CommentListComponent,
    CreatePostModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    provideRouter(appRoutes, withComponentInputBinding())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
