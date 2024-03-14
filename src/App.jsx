import { styled } from "styled-components";
import Navbar from "./Components/Molecules/Navbar";
import Section1 from "./Components/Organisms/Section1";

const App = () => {
  return (
    <App>
      <AppContainer>
        <Navbar />
        <Section1 />
      </AppContainer>
    </App>
  );
};

export default App;

const AppContainer = styled.div`
  padding: 0 30px;
`;
