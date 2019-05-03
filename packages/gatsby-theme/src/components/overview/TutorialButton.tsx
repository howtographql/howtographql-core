import React from "react";
import { Flex, Box, Image, Heading, Text, Button } from "../shared/base";

interface TutorialButtonProps {
  text: string;
  icon: string;
}

export const TutorialButton: React.FunctionComponent<
  TutorialButtonProps
> = props => {
  return (
    <Button onClick={() => onClick()}>
      <Flex alignItems="center" p={1} flexDirection="row">
        <Image
          src="https://i.ibb.co/MBKTQ9b/Icon.png"
          margin="10px 10px 10px 10px"
        />
        <Text>{props.text}</Text>
      </Flex>
    </Button>
  );
};

const onClick = () => {
  alert("TOUCHED");
};
export default TutorialButton;
