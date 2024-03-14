import { styled } from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <Searchbox>
      <input type="search" className="input" />
      <IoSearchOutline className="icon" />
    </Searchbox>
  );
};

export default Search;

const Searchbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .input {
    outline: none;
    padding: 4px 8px;
    border: 2px solid black;
    border-radius: 6px;
  }

  .icon {
    width: 28px;
    height: 28px;
  }
`;
