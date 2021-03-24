import React from 'react';
import styled from 'styled-components';

import * as styles from '../styles';

const StyledFooter = styled.footer`
  margin-top: auto;
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  text-align: center;
  margin: 12px 0;
  font-size: ${styles.fontSizes.small};
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Paragraph>Copyright &copy; 2021 Foo Bar</Paragraph>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
