import React from 'react';
import { Image, Text, Flex, Box } from './shared/base';

type Author = {
  name: string;
  job: string;
  info: string;
  picture: string;
};

type AuthorListProps = {
  authors: Author[];
};

export const AuthorList: React.FunctionComponent<AuthorListProps> = props => {
  return (
    <div>
      <Box p={3} bg="#e5e5e5">
        <Text fontSize={[1]}>WRITTEN BY</Text>
        {props.authors.map(author => (
          <Author author={author} />
        ))}
      </Box>
    </div>
  );
};

type AuthorProps = {
  author: Author;
};

const Author: React.FunctionComponent<AuthorProps> = props => {
  return (
    <Flex alignItems="center" p={1}>
      <Box p={1} width={[0.2]}>
        <Image src={props.author.picture} borderRadius={100} />
      </Box>
      <Box p={1} width={[0.6]}>
        <Text fontSize={[1]}>{props.author.name}</Text>
      </Box>
    </Flex>
  );
};
