import React from "react";
import { styled } from "../styles";
import { Image, Text, Flex, Box } from "./shared/base";

export const Author = props => {
  return (
    <div>
      <AuthorContainer>
        <Text> Author Information</Text>
        <AuthorList authors={props.authors} />
      </AuthorContainer>
    </div>
  );
};

const AuthorList = props => {
  return props.authors.map(author => (
    <Flex alignItems="center" justifyContent="flex-start">
      <Box p={3}>
        <Avatar src={author.picture} />
      </Box>
      <Box p={3} flex="2">
        {author.name}
        <br />
        {author.job}
      </Box>
    </Flex>
  ));
};

const Avatar = styled(Image)`
  border-radius: 50%;
  width: 100px;
`;
const AuthorContainer = styled(Box)`
  background-color: #e5e5e5;
  width: 100%;
  padding: 25px 100px 25px 100px;
`;
