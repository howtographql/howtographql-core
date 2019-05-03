import { css } from ".";

export const mobile = (inner: any) => css`
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    ${inner};
  }
`;

export const phone = (inner: any) => css`
  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    ${inner};
  }
`;
