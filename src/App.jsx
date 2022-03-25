import { Global, ThemeProvider } from "@emotion/react";
import TodoApp from "./components/TodoApp";
import ThemeImage from "./styles/components/Theme/ThemeImage";
import ThemeToggler from "./styles/components/Theme/ThemeToggler";
import Footer from "./styles/layouts/Footer";
import Header from "./styles/layouts/Header";
import React, { useState, useEffect } from 'react';

function App() {
  const lightTheme = {
    gray1: "hsl(0, 0%, 98%)",
    gray2: "hsl(236, 33%, 92%)",
    gray3: "hsl(233, 11%, 84%)",
    gray4: "hsl(236, 9%, 61%)",
    gray5: "hsl(235, 19%, 35%)"
  }

  const [isDesktop,setDesktop] = useState(matchMedia('(min-width:769px)').matches)
  useEffect(() => {
    matchMedia('(min-width:769px)').addEventListener('change',event => {
      setDesktop(event.matches)
    })
  },[])


  return (
    <>
      <Global styles={`
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');

      *,*::before,*::after {
        box-sizing: inherit;
        font-family: inherit;
      }

      html,body {
        box-sizing: border-box;
        font-family: "Josefin Sans";
        margin: 0;
        padding: 0;
      }

      html {
        background-color: ${lightTheme.gray1};
      }
      `} />

      <ThemeProvider theme={lightTheme}>
        <Header>
          <h1>TODO</h1>
          
          <ThemeToggler>
            <svg className="light" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
            <svg className="dark" xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
          </ThemeToggler>
        </Header>
        
        <ThemeImage isDesktop={isDesktop}>
          <img className="light" src={ `images/bg-${isDesktop ? "desktop" : "mobile"}-light.jpg`  }alt="background image (light)" />
          <img className="dark" src={ `images/bg-${isDesktop ? "desktop" : "mobile"}-dark.jpg`  }alt="background image (dark)" />
        </ThemeImage>

        <TodoApp />

        <Footer>
          Drag and drop to reorder list
        </Footer>
      </ThemeProvider>
    </>
  );
}

export default App;