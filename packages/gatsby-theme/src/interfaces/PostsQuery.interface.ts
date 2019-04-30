import { EdgeNode } from "./EdgeNode.interface";

interface Post {
  path: string;
  pageTitle: string;
}

export interface PostsQueryData {
  allMdx: {
    edges?: [EdgeNode<Post>];
  };
}
