import { css, createGlobalStyle } from './styled';

// Utilities
import { theme } from './theme';
import normalize from './normalize';

// const documentStyles = css`
//   html {
//     line-height: 1.15;
//     box-sizing: border-box;
//     background: white;
//   }

//   body {
//     margin: 0;
//     font-family: 'Open Sans', sans-serif;
//     font-variant-ligatures: none;
//     text-rendering: optimizeLegibility;
//     -webkit-font-smoothing: antialiased;
//     text-decoration-skip-ink: auto;
//     text-decoration-skip: ink;
//     background: white;
//   }

//   *,
//   *::before,
//   *::after {
//     box-sizing: inherit;
//   }

//   h1,
//   h2 {
//     font-family: 'Montserrat', sans-serif;
//     font-weight: 700;
//   }

//   a {
//     color: currentColor;
//     text-decoration: none;
//     font-size: ${theme.sizes.sizeActions}px;
//     transition: color 100ms ease;
//   }

//   ::selection {
//     background: ${theme.colors.primary};
//     color: white;
//   }

//   code {
//     font-family: ${theme.sizes.fontStackMono};
//   }

//   #nprogress .bar {
//     height: 3px;
//   }
// `;

// ${documentStyles}

export const GlobalStyles = createGlobalStyle`
${normalize}
`;
