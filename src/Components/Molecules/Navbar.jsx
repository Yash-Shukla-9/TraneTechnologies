import { styled } from "styled-components";
import Navlist from "../Atoms/Navlist";
import Search from "../Atoms/Search";

const Navbar = () => {
  return (
    <Header>
      <img src="/public/logo-TT.svg" alt="logo" className="navlogo" />
      <Navlist />
      <Search />
    </Header>
  );
};

export default Navbar;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* padding: 20px 0; */
  height: 100px;

  .navlogo {
    width: 150px;
  }
`;
