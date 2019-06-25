import * as React from 'react';
import Layout from '../components/shared/layout';
import { Content } from '../components/shared/styledHelpers';
import {
  Heading,
  Box,
  Flex,
  Text,
  Button,
  Image,
} from '../components/shared/base';
import { styled } from '../styles';
import WithCurrentUser from '../utils/auth/WithCurrentUser';
import TutorialListing from '../components/community/TutorialListing';
import { graphql } from 'gatsby';

const community = ({ data }) => {
  const tutorials = data.tutorials.edges;
  return (
    <Layout>
      <Flex flexDirection="column" alignItems="center" p={4}>
        <Box
          style={{
            backgroundImage: `url(${'https://i.ibb.co/S736mwr/Bg.png'})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            <HeaderText width={1 / 4}>
              <Heading p={3} fontSize={5} color="#515273">
                Community Tutorials
              </Heading>
              <Text p={3} color="#515273">
                Learn from a wide range of topics. Client or server, beginner or
                advanced, theoretical or code-along – discover the tutorials
                contributed by the GraphQL community!
              </Text>
            </HeaderText>

            <HeaderText>
              <img src="https://i.ibb.co/pKM9XgL/Illustration.png" />
            </HeaderText>

            <FilterBox marginTop={25}>
              <Text p={3}>FOR FILTER BOX </Text>
            </FilterBox>
          </Flex>
        </Box>
      </Flex>

      <TutorialContent>
        <Underline m={3} width={5 / 5}>
          <p>
            <span>{tutorials.length} TUTORIALS </span>
          </p>
        </Underline>
        <Content>
          {tutorials.map(tutorial => {
            return (
              <div key={tutorial.node.id}>
                <TutorialListing tutorial={tutorial.node} />
              </div>
            );
          })}
        </Content>
      </TutorialContent>
      <Footer height={5 / 5} p={5} paddingRight={100} paddingLeft={100}>
        <Heading>Contributors</Heading>
        <div>
          l ac, feugiat convallis magna. Nam dignissim semper mauris, pharetra
          mollis neque viverra ac. Duis semper, odio quis tincidunt convallis,
          libero mi tristique ipsum.l ac, feugiat convallis magna. Nam dignissim
          semper mauris, pharetra mollis neque viverra ac. Duis semper, odio
          quis tincidunt convallis, libero mi tristique ipsum.
        </div>
        <Flex flexDirection="row" backgroundColor="orange" marginTop={5}>
          <Box
            backgroundColor="#F6F6F8"
            p={4}
            width={2 / 4}
            alignContent="flex-start"
          >
            <Heading color="#515273" textAlign="left">
              Nullam ultrices massa
            </Heading>
            <Text color="#515273" textAlign="left">
              l ac, feugiat convallis magna. Nam dignissim semper mauris,
              pharetra mollis neque viverra ac. Duis semper, odio quis tincidunt
              convallis, libero mi tristique ipsum.
            </Text>
            <Button m={3}>Write a Tutorial</Button>
          </Box>
          <Box p={2}>
            <Text fontSize={[1]} textAlign="left">
              CORE CONTRIBUTORS
            </Text>
            <Image
              width={[20, 30, 40]}
              src="https://i.ibb.co/h1hf2Ss/Avatar.png"
              borderRadius={100}
            />
            <Text fontSize={[1]} textAlign="left">
              COURSE CONTRIBUTORS
            </Text>
            <Image
              width={[20, 30, 40]}
              src="https://i.ibb.co/h1hf2Ss/Avatar.png"
            />
            <Text fontSize={[1]} textAlign="left">
              TUTORIAL CONTRIBUTORS
            </Text>
            <Image
              width={[20, 30, 40]}
              src="https://i.ibb.co/h1hf2Ss/Avatar.png"
            />
          </Box>
        </Flex>
      </Footer>
    </Layout>
  );
};

export const query = graphql`
  query CommunityTutorialQuery {
    tutorials: allMdx(
      filter: {
        frontmatter: { tutorialTitle: { ne: null } }
        fileAbsolutePath: { regex: "/community/" }
      }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            id
            tutorialTitle
            description
          }
        }
      }
    }
  }
`;

const HeaderText = styled(Box)`
  padding: 0.5rem;
  margin-bottom: 1rem;
  max-width: ${p => p.theme.middleContainerWidth}px;
`;

const FilterBox = styled(Box)`
  width: 90vh;
  height: 144px;
  background-color: #0e0f3b;
  color: white;
`;

export const Underline = styled(Box)`
  p {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 10px 0 20px;
  }
  ,
  p span {
    background: #e5e5e5;
    padding: 0 10px;
  }
`;

const Footer = styled(Box)`
  background-color: white;
  text-align: center;
`;

const TutorialContent = styled(Box)`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default community;
