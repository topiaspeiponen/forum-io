import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment, FullPost, Post } from './types';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${apiUrl}/posts`);
  }

  getPostById(postId: number) {
    return this.http.get<FullPost>(`${apiUrl}/posts/${postId}`);
  }

  createPost(post: { title: string; content: string }) {
    return this.http.post<HttpResponse<FullPost>>(`${apiUrl}/posts`, post, { observe: 'response' });
  }

  createComment(comment: { postId: number; creatorName: string; content: string }) {
    return this.http.post<Comment>(`${apiUrl}/posts/${comment.postId}/comments`, comment, { observe: 'response' });
  }
}