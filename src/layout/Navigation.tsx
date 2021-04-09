import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as styles from '../styles';

const StyledNav = styled.nav``;

const List = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
  @media (min-width: ${styles.breakpoints.medium}) {
    display: flex;
  }
`;

const ListItem = styled.li``;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 4px;
`;

const Navigation: React.FC = () => {
  return (
    <StyledNav>
      <List>
        <ListItem>
          <StyledLink to="/">Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/login">Login</StyledLink>
        </ListItem>
      </List>
    </StyledNav>
  );
};

export default Navigation;
