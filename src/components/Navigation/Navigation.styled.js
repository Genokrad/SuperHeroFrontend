import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 32px;

  &:hover,
  &:focus {
    color: black;
  }

  &.active {
    color: var(--second-color);
  }
`;

export const Styledlist = styled.ul`
  display: flex;
  gap: 40px;
`;
