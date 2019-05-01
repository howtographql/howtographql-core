import React from "react";
import { styled, mobile, css } from "../styles";
import { Flex, Box } from "./shared/base";

interface AuthorProps {
  name: string;
  job: string;
  info: string;
}

export const Author: React.FunctionComponent<AuthorProps> = props => {
  return (
    <AuthorContainer alignItems="center" justifyContent="flex-start">
      <Box p={3}>
        <Avatar src="https://www.w3schools.com/howto/img_avatar2.png" />
      </Box>
      <Box p={3} flex="2">
        {props.name}
        <br />
        {props.job}
      </Box>
      <AuthorInfo p={3} flex="3">
        {props.info}
      </AuthorInfo>
    </AuthorContainer>
  );
};

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;
const AuthorContainer = styled(Flex)`
  background-color: #e5e5e5;
  width: 100%;
  padding: 25px 100px 25px 100px;
`;

const AuthorInfo = styled(Box)`
  ${mobile(css`
    display: none;
  `)}
`;
