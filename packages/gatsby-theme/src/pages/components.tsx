import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Card,
  Link as BaseLink
} from "../components/shared/base";

const SecondPage = () => (
  <Layout>
    <h3>Check out our rebass components!</h3>

    <h3>Box Component</h3>
    <Box p={5} fontSize={4} width={[1, 1, 1 / 2]} color="white" bg="magenta">
      Box
    </Box>

    <h3>Flex Component</h3>
    <Flex>
      <Box p={3} width={1 / 2} color="magenta" bg="black">
        Flex
      </Box>
      <Box p={3} width={1 / 2} color="white" bg="magenta">
        Box
      </Box>
    </Flex>

    <h3>Text Component</h3>
    <Text fontSize={[3, 4, 5]} fontWeight="bold" color="magenta">
      Text
    </Text>

    <h3>Heading Component</h3>
    <Heading color="magenta">Hello</Heading>

    <h3>Button Component</h3>
    <Button bg="magenta">Button</Button>

    <h3>Image Component</h3>
    <Image
      width={[1, 1, 1 / 2]}
      src="https://source.unsplash.com/random/1280x720"
      borderRadius={8}
    />

    <h3>Card Component</h3>
    <Card
      fontSize={6}
      fontWeight="bold"
      width={[1, 1, 1 / 2]}
      p={5}
      my={5}
      bg="#f6f6ff"
      borderRadius={8}
      boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
    >
      Card
    </Card>

    <h3>
      BaseLink Component (Originally Link but conflicts with Gatsby's Link)
    </h3>
    <BaseLink href="https://rebassjs.org">Link</BaseLink>

    <Link to="/">Go back to the homepage</Link>
    <p />
    <Link to="/about">Go to the About page</Link>
  </Layout>
);

export default SecondPage;
