import { styled } from "styled-components";
import { IoArrowForwardSharp } from "react-icons/io5";

const ButtonLink = ({ title }) => {
  return (
    <Buttonbox>
      {title}
      <IoArrowForwardSharp className="icon" />
    </Buttonbox>
  );
};

export default ButtonLink;
const Buttonbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 23px;
  font-weight: 600;
  color: #ff0066;
  position: relative;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:hover .icon {
    transform: translateX(10px);
  }

  .icon {
    color: #ff0066;
    transition: transform 0.2s ease;
  }
`;
