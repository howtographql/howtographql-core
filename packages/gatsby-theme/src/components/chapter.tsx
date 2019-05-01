import React from "react";
import { Heading, Text, Flex, Card } from "./shared/base";

const Chapter = ({ num, title, description }) => {
  return (
    <Card
      width={[1]}
      p={4}
      my={4}
      borderRadius={8}
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
    >
      <Flex alignItems="center">
        <Heading p={4}>{num}</Heading>
        <div>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </div>
      </Flex>
    </Card>
  );
};

export default Chapter;
