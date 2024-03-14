import { styled } from "styled-components";
import ButtonLink from "../Atoms/ButtonLink";
import { FaArrowDownLong } from "react-icons/fa6";

const Section1 = () => {
  return (
    <Main>
      <Left>
        <Smallbox>
          <img src="/innovation-illustration.png" alt="" className="sec1img" />
          <AllLinks>
            <a href="https://www.thermoking.com/na/en.html" className="alink">
              Thermoking.com
            </a>

            <a href="https://www.trane.com/index.html" className="alink">
              Trane.com
            </a>
            <Stockshow>
              TT 285.93-1.78
              <FaArrowDownLong className="icon" />
            </Stockshow>
          </AllLinks>
        </Smallbox>
        <p className="text">
          Today, big ideas and <br /> bold action. <br />
          Tomorrow, a better <br /> world for everyone.
        </p>
        <ButtonLink title={"See our impact"} />
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

const Smallbox = styled.div`
  display: flex;
  justify-content: space-between;
  .alink {
    text-decoration: none;
    color: black;
    font-size: 13px;
    font-weight: 600;
  }
`;

const AllLinks = styled.div`
  display: flex;
  height: 100%;
  /* align-items: center; */
  gap: 15px;
  cursor: pointer;

  a:hover {
    text-decoration: underline;
  }
`;

const Stockshow = styled.div`
  display: flex;
  gap: 5px;

  font-size: 13px;
  font-weight: 600;
  .icon {
    color: #ff0066;
    font-size: 12px;
  }
`;
