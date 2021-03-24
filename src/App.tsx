import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import * as styles from './styles';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ArticleList from './pages/ArticleList/ArticleList';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Poppins', sans-serif;
    background: ${styles.colors.white};
    color: ${styles.colors.black}
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 3px;
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main>
          <Content>
            <Switch>
              <Route exact path="/" component={ArticleList} />
            </Switch>
          </Content>
        </main>
        <Footer />
      </Wrapper>
    </Router>
  );
};

export default App;
