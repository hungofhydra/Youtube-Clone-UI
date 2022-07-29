import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import React from "react";
import { darkTheme, lightTheme } from "./utils/Theme";
const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.background};
`;
const Wrapper = styled.div``;
function App() {
  const [dark, setDark] = React.useState(false);
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Container>
        <Menu dark={dark} setDark={setDark} />
        <Main>
          <Navbar />
          <Wrapper>Video cards</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
