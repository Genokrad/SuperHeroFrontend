import { StyledNavLink, Styledlist } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <nav>
        <Styledlist>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="heroes">Heroes</StyledNavLink>
          </li>
        </Styledlist>
      </nav>
    </>
  );
};
