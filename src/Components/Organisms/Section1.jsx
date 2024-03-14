import { styled } from "styled-components";

const Section1 = () => {
  return (
    <Main>
      <Left>
        <img src="/innovation-illustration.png" alt="" className="sec1img" />
        <p className="text">
          Today, big ideas and <br /> bold action. <br />
          Tomorrow, a better <br /> world for everyone.
        </p>
      </Left>

      <Right>
        <video
          src="/homepage-video.mp4"
          controls
          loop
          autoPlay
          width={600}
        ></video>
      </Right>
    </Main>
  );
};

export default Section1;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* gap: 100px; */
  margin-top: 20px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  .sec1img {
    width: 150px;
  }

  .text {
    font-size: 55px;
    line-height: 1.3;
    font-weight: 600;
    color: var(--text-color);
  }
`;

const Right = styled.div`
  object-fit: cover;
  height: 100%;
`;
