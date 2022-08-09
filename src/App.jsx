import styled, { ThemeProvider } from 'styled-components';

import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from './pages/SignIn';
import { darkTheme, lightTheme } from './utils/Theme';

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.background};
`;
const Wrapper = styled.div``;

function App() {
  const [ dark, setDark ] = React.useState(false);

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
                  <Route index element={<Home type="random" />} />
                  <Route path="trend" element={<Home type="trend" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route element={<Home />} index />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route element={<Video />} path=":id" />
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
