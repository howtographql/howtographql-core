import { styled, css } from '../../styles';
import { mobile } from '../../styles/mobile';
import { SpaceSizes } from '../../styles/theme/index';

type Props = {
  width?: SpaceSizes;
  height?: SpaceSizes;
  widthOnMobile?: SpaceSizes;
  heightOnMobile?: SpaceSizes;
  fillRow?: boolean;
  fillColumn?: boolean;
};

export const Space = styled.div<Props>`
  width: ${p => (typeof p.width === 'number' ? p.width + 'px' : 'auto')};
  height: ${p => (typeof p.height === 'number' ? p.height + 'px' : 'auto')};
  flex-shrink: 0;

  ${p =>
    mobile(css`
      ${typeof p.widthOnMobile === 'number' &&
        css`
          width: ${p.widthOnMobile}px;
        `};

      ${typeof p.heightOnMobile === 'number' &&
        css`
          height: ${p.heightOnMobile}px;
        `};
    `)};

  ${p =>
    p.fillRow &&
    css`
      flex-grow: 1;
      margin-right: auto;
      margin-left: auto;
    `};

  ${p =>
    p.fillColumn &&
    css`
      flex-grow: 1;
      margin-top: auto;
      margin-bottom: auto;
    `};
`;
