import styled from 'styled-components';
import { colors } from '../styles';

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 8px 12px;
  color: ${colors.white};
  background: ${colors.black};
  border-radius: 0px;
  border: solid 2px ${colors.black};
  font-weight: 700;
  :hover:enabled {
    color: ${colors.black};
    background: ${colors.white};
  }
  :disabled {
    background: ${colors.grey};
  }
`;

export default Button;
