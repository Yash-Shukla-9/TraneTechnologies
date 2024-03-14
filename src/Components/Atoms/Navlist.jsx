import { styled } from "styled-components";

const listdata = [
  {
    title: "About Us",
  },
  {
    title: "Brands",
  },
  {
    title: "Sustainability",
  },

  {
    title: "Careers",
  },

  {
    title: "News",
  },

  {
    title: "Investors",
  },

  {
    title: "Blog",
  },
];
const Navlist = () => {
  return (
    <ListBox>
      {listdata.map((item, index) => {
        return <Listitem key={index}>{item.title} </Listitem>;
      })}
    </ListBox>
  );
};

export default Navlist;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;
const Listitem = styled.div`
  gap: 10px;
  font-size: 23px;
  font-weight: 500;
  .list {
    display: flex;
  }
`;
