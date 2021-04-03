import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles';

interface Props {
  message: string;
}

const StyledH3 = styled.h3`
  text-align: center;
  font-weight: 400;
  color: ${colors.red};
`;

const Error: React.FC<Props> = ({ message }) => {
  return <StyledH3>{message}</StyledH3>;
};

export default Error;
