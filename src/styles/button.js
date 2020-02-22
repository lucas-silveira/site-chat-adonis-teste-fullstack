import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  color: #fff;
  background-color: var(--secondary-color);
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  transition: background-color 500ms;

  &:hover {
    background-color: ${darken(0.1, '#0597F2')};
  }
`;

export default Button;
