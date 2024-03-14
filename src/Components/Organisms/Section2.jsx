import { styled } from "styled-components";

const Section2 = () => {
  return (
    <Sec2>
      <h1 className="heading">Sustainability is the answer</h1>

      <TextBox>
        <p className="title">
          We’re leading our industry in sustainability practices and it’s <br />
          already having a positive effect
          <span className="link"> Let us convince you.</span>
        </p>
      </TextBox>
    </Sec2>
  );
};

export default Section2;

const Sec2 = styled.div`
  height: 140px;
  margin: 30px 0;
  .heading {
    margin-left: 85px;
    font-weight: 500;
    font-size: 50px;
    color: var(--text-color);
  }

  .title {
    font-size: 32px;
    margin: 12px 0;
    font-weight: 500;
  }

  .link {
    color: var(--link-color);
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
