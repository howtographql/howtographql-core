import { css } from ".";

export const mobile = (inner: any) => css`
  @media (max-width: ${p => p.theme.sizes.breakpoints[1]}) {
    ${inner};
  }
`;

export const phone = (inner: any) => css`
  @media (max-width: ${p => p.theme.sizes.breakpoints[0]}) {
    ${inner};
  }
`;
