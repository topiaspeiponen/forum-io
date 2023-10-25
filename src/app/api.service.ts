import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FullPost, Post } from './types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`http://localhost:8080/posts`);
  }

  getPostById(postId: number) {
    return this.http.get<FullPost>(`http://localhost:8080/posts/${postId}`);
  }
}