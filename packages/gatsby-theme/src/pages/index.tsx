import { RouterProps } from '@reach/router';
import * as React from 'react';
import Layout from '../components/shared/layout';
import Listing from '../components/index/listing';
import { GlobalStyles } from '../styles';
import {
  Heading,
  Box,
  Flex,
  Text,
  Button,
  Image,
} from '../components/shared/base';
import { styled } from '../styles';
import { TutorialButton } from '../components/shared/buttons';
import { Space } from '../components/shared/Space';

const IndexPage: React.FunctionComponent<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <GlobalStyles />
    <Flex flexDirection="column" alignItems="center">
      <Space height={119} />
      <MainHero alignItems="center" flexDirection="column">
        <Title width={2 / 3}>The Fullstack Tutorial for GraphQL</Title>
        <Space height={32} />
        <Box width={4 / 7}>
          <HeroText textAlign="center">
            How to GraphQL is a free tutorial website that teaches all aspects
            of GraphQL - from writing your first GraphQL query to taking your
            GraphQL server to production.
          </HeroText>
        </Box>
        <Space height={54} />
        <TutorialButton>Start with Introduction</TutorialButton>
        <Space height={82} />
        <Fundamentals width={2 / 3} px={4} pt={4}>
          <Flex>
            <Box width={1 / 2} mx={4} mt={3}>
              <Heading>GraphQL Fundamentals</Heading>
              <Image
                width={1 / 20}
                src="https://image.flaticon.com/icons/svg/84/84510.svg"
              />
              <Space height={12} />
              <Text>
                A general introduction to GraphQL for frontend and backend
                developers.
                <br /> <br />
                Read this tutorial to learn about GraphQL's basic concepts and
                prepare yourself for a hands-on beginner tutorial.
              </Text>
            </Box>
            <Box width={1 / 2} px={3} pt={3}>
              <Image src="https://i.ibb.co/vHkQHv7/Chapters.png" />
            </Box>
          </Flex>
        </Fundamentals>
      </MainHero>
      <Box width={2 / 3} backgroundColor="yellow">
        <Flex backgroundColor="green">
          <CommunityText width={2 / 3}>
            <Heading>Community Tutorials</Heading>
            Community tutorials are targeting a wide range of topics. Client or
            server, beginner or advanced, theoretical or code-along, high-level
            or niche – discover the amazing tutorials contributed by the GraphQL
            community!
          </CommunityText>
          <Box backgroundColor="red" width={1 / 3}>
            <TutorialButton>View All Tutorials</TutorialButton>
          </Box>
        </Flex>
        <Listing />
      </Box>
    </Flex>
  </Layout>
);

const MainHero = styled(Flex)`
  background-image: url('https://i.ibb.co/rmNKQGk/Group-2.png');
  background-position: center;
  background-size: cover;
`;

const HeroText = styled(Text)`
  font-family: Open Sans;
  font-size: 24px;
`;

const Fundamentals = styled(Box)`
  box-shadow: 0px 4px 27px rgba(14, 15, 59, 0.072);
  border-radius: 8px 8px 0px 0px;
  background: #ffffff;
`;

const Title = styled(Heading)`
  font-size: 64pt;
  text-align: center;
  color: #515273;
  font-weight: bold;
  letter-spacing: -0.03em;
`;

const CommunityText = styled(Text)`
  margin: 0 auto;
`;
export default IndexPage;
