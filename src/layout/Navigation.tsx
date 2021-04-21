import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import * as styles from '../styles';
import useAuth from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/authSlice';

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
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogoutClick = () => {
    dispatch(logoutUser());
    history.push('/');
  };

  return (
    <StyledNav>
      <List>
        <ListItem>
          <StyledLink to="/">Home</StyledLink>
        </ListItem>
        {isLoggedIn ? (
          <>
            <ListItem>
              <StyledLink to="#" onClick={handleLogoutClick}>
                Log out
              </StyledLink>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem>
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/register">Registration</StyledLink>
            </ListItem>
          </>
        )}
      </List>
    </StyledNav>
  );
};

export default Navigation;
