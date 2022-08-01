import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import React from "react";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <BrowserRouter>
          <Menu dark={dark} setDark={setDark} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
