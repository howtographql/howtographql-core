import { RouterProps } from '@reach/router';
import * as React from 'react';

const PostLayout: React.FunctionComponent<any> = ({ data, ...props }) => {
  if (!data) {
    return null;
  }

  const { title, date } = data.mdx.frontmatter;
  const { location, children } = props;

  return (
    <div>
      <h1>{title}</h1>
      <em>{date}</em>
      {children}
    </div>
  );
};

export default PostLayout;
