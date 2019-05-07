import React from "react";
import { Image, Text, Flex, Box } from "./shared/base";

interface AuthorProps {
  authors: Author[];
}

interface Author {
  name: string;
  job: string;
  info: string;
  picture: string;
}

export const Author: React.FunctionComponent<AuthorProps> = props => {
  return (
    <div>
      <Box p={3} bg="#e5e5e5">
        <Text fontSize={[1]}>WRITTEN BY</Text>
        {props.authors.map(author => (
          <AuthorList author={author} />
        ))}
      </Box>
    </div>
  );
};

const AuthorList = props => {
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
