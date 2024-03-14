import { styled } from "styled-components";

const Section1 = () => {
  return (
    <Main>
      <Left>
        <img
          src="/public/innovation-illustration.png"
          alt=""
          className="sec1img"
        />
      </Left>

      <Right></Right>
    </Main>
  );
};

export default Section1;

const Main = styled.div``;

const Left = styled.div`
  .sec1img {
    width: 120px;
  }
`;

const Right = styled.div``;
