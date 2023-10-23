export type Post = {
  id: number;
  title: string;
  content: string;
  comments: number;
}

export const posts : Post[] = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post's content.",
    comments: 0
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post's content.",
    comments: 0
  },
  {
    id: 3,
    title: "Third Post3",
    content: "This is the third post's content.",
    comments: 0
  }
];