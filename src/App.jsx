import { styled } from "styled-components";

import Navbar from "./Components/Molecules/Navbar";
import Section1 from "./Components/Organisms/Section1";
import Section2 from "./Components/Organisms/Section2";
import Section3 from "./Components/Organisms/Section3";
import Section4 from "./Components/Organisms/Section4";
const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div``;
