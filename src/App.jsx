import { styled } from "styled-components";

import Navbar from "./Components/Molecules/Navbar";
import Section1 from "./Components/Organisms/Section1";

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <Section1 />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div``;
