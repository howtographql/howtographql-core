export interface PostQueryData {
  data: {
    mdx: {
      frontmatter: {
        path: string;
        pageTitle: string;
        date: Date;
      };
      code: {
        body: any;
      };
    };
  };
}
