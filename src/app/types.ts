export type Post = {
  id: number;
  title: string;
  content: string;
  commentsCount: number;
}

export type FullPost = Post & {
  comments: Comment[];
}

export type Comment = {
  postId: number;
  id: number;
  creatorName: string;
  content: string;
}