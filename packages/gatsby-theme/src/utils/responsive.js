import { styled, css } from '../styles';

const mobile = body => css`
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    ${body};
  }
`;

const tablet = body => css`
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
    ${body};
  }
`;

export const ShowOnMobile = styled.div`
  display: none;
  ${mobile(css`
    display: block;
  `)};
`;

export const HideOnMobile = styled.div`
  ${mobile(css`
    display: none;
  `)};
`;

export const ShowOnTablet = styled.div`
  display: none;
  ${tablet(css`
    display: block;
  `)};
`;

export const HideOnTablet = styled.div`
  ${tablet(css`
    display: none;
  `)};
`;
