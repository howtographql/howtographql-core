import * as React from 'react';
import Link from 'gatsby-link';
import { styled } from '../../styles';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  text-transform: uppercase;
  height: auto;
  color: ${p => p.theme.colors.primary};
`;

type LogoProps = { maxHeight: number };

export default ({ maxHeight }: LogoProps) => {
  return (
    <div>
      <Link to="/">
        <LogoWrapper>
          <img
            src={require('../../assets/icons/howtographql.svg')}
            alt=""
            height={maxHeight}
            style={{ marginBottom: 0, marginRight: 5, marginLeft: 10 }}
          />
          <span>How to GraphQL</span>
        </LogoWrapper>
      </Link>
    </div>
  );
};
