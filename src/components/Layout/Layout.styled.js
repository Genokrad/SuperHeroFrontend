import styled from 'styled-components';
import mainBcgImg from '../../images/mainBcg.jpeg';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: var(--first-color);
  display: grid;
  justify-content: center;
  padding: 8px;
`;

export const StyledMain = styled.main`
  background-image: url(${mainBcgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* background-color: var(--first-color); */
  opacity: 0.9;
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* padding: 16px; */
`;
