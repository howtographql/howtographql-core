import React from "react";
import { Heading, Text, Flex, Card } from "./shared/base";

const Chapter = ({ num, title, description }) => {
  return (
    <Card width={[1]} p={4} my={4} borderRadius={8} boxShadow="small">
      <Flex alignItems="center">
        <Heading p={4}>{num}</Heading>
        <div>
          <Heading as="h2">{title}</Heading>
          <Text>{description}</Text>
        </div>
      </Flex>
    </Card>
  );
};

export default Chapter;
