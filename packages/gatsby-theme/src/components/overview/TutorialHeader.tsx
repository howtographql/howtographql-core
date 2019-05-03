import React from "react";
import { Flex, Box, Image, Heading, Text } from "../shared/base";

const TutorialHeader = ({ title, description, tags }) => {
  return (
    <Box p={2}>
      <Image
        width={[0.25, 0.25, 0.25]}
        src="https://cdn-images-1.medium.com/max/1200/1*yTMBzO8zfEhKr4Lky6pjZQ.png"
      />
      <Heading> {title} </Heading>
      <Text>{description} </Text>
      <Image
        width={[0.025, 0.025, 0.025]}
        src="https://image.flaticon.com/icons/svg/84/84510.svg"
      />
      <Text>{tags.join("  ")}</Text>
    </Box>
  );
};

export default TutorialHeader;
