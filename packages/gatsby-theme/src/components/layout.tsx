import { RouterProps } from '@reach/router';
import * as React from 'react';
import Helmet from 'react-helmet';
import { theme, ThemeProvider, styled } from '../styles';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import Header from './shared/Header';

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  padding-top: 68px;
`;

type LayoutProps = React.ReactNode & RouterProps;

const Layout = ({ children }) => {
  const { site } = useLayoutQuery();

  const { title, description, keywords } = site!.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords || undefined },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={title} />
        <MainLayout>
          <div>{children}</div>
        </MainLayout>
      </>
    </ThemeProvider>
  );
};

export default Layout;
