import React from 'react';

// Vectors
import Logo from './Logo';
import { styled, withTheme, ThemeInterface } from '../../styles';
import { Link } from 'gatsby';
import { Content } from './styledHelpers';
import { Flex } from '@rebass/grid';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0px 25px;
  height: ${p => p.theme.sizes.navHeight}px;
  background-color: ${p => p.theme.colors.white};
  z-index: ${p => p.theme.zIndex.appBar};
  box-shadow: 0 0.3rem 1rem rgba(25, 17, 34, 0.05);
`;

const InnerWrapper = styled(Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  max-width: ${p => p.theme.sizes.middleContainerWidth}px;
`;

const NavLink = styled(Link)`
  padding: 0px 25px;
  color: ${p => p.theme.colors.secondaryLight1};
`;

const Container = styled(Flex)`
  flex: 1;
`;

const Nav = withTheme(
  ({ theme }: { siteTitle: string; theme: ThemeInterface }) => {
    return (
      <Wrapper>
        <InnerWrapper>
          <Container>
            <Logo maxHeight={theme.sizes.brandHeight} />
          </Container>
          <Container justifyContent="center">
            <NavLink to="/tutorials">Fundamentals</NavLink>
            <NavLink to="/tutorials">Guides</NavLink>
            <NavLink to="/tutorials">Community</NavLink>
          </Container>
          <Container justifyContent="flex-end">other stuff</Container>
        </InnerWrapper>
      </Wrapper>
    );
  }
);

export default Nav;
