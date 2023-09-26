import styled from 'styled-components';

export const StiledList = styled('ul')`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  gap: 16px;

  @media (max-width: 1300px) {
    padding-top: 68px;
    padding-bottom: 32px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (max-width: 540px) {
    padding-top: 68px;
    padding-bottom: 32px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;
