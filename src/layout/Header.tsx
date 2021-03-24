import React from 'react';
import styled from 'styled-components';

import * as styles from '../styles';

const StyledHeader = styled.header`
  border-bottom: solid 2px ${styles.colors.black};
  padding: 4px;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${styles.fontSizes.large};
  color: ${styles.colors.red};
  margin: 0;
  @media (min-width: ${styles.breakpoints.medium}) {
    font-size: ${styles.fontSizes.xLarge};
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <Title>React Blog</Title>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
