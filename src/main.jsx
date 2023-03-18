import React from 'react'
import ReactDOM from 'react-dom/client'

import Contact from "./components/Contact"
import Landing from "./components/Landing"
import About from "./components/About"
import styled from "styled-components"
import Features from "./components/Features"
import Developers from "./components/Developers"

const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background-color: #0a0909;
  // background: url("./img/background.jpg");
  &::-webkit-scrollbar{
    display: none;
  }
  height: 100vh;
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
      <Landing/>
      <About/>
      <Features/>
      <Developers/>
      <Contact/>
    </Container>
  </React.StrictMode>,
)
