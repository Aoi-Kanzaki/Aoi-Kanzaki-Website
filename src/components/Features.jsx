import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  font-family: consolas;
`

const Title = styled.h1`
  font-size: 74px;
  text-align: left;
  padding: 40px 0px;
  justify-content: center;
  align-items: center;
  display: flex;
`

const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 10vw;
`

const Card = styled.div`
  position: relative;
  width: 320px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 30px;
  transition: 0.5s;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
    filter: blur(30px);
    transition: 0.5s;
  }
  
  &:hover {
    &:before, &:after {
      transform: skewX(0deg);
      left: 20px;
      width: calc(100% - 90px);
    }
  }
  
  &:nth-child(1):before,
  &:nth-child(1):after {
    background: linear-gradient(300deg, #04407e, #21b7ff);
  }
  
  &:nth-child(2):before,
  &:nth-child(2):after {
    background: linear-gradient(300deg, #04407e, #21b7ff);
  }
  
  &:nth-child(3):before,
  &:nth-child(3):after {
    background: linear-gradient(300deg, #04407e, #21b7ff);
  }
  
  &:nth-child(4):before,
  &:nth-child(4):after {
    background: linear-gradient(300deg, #04407e, #21b7ff);
  }
  
  &:nth-child(5):before,
  &:nth-child(5):after {
    background: linear-gradient(300deg, #04407e, #21b7ff);
  }
  
  &:nth-child(6):before,
  &:nth-child(6):after {
    background: linear-gradient(300deg, #04407e, #21b7ff);
  }

  &:hover > span:before {
    top: -50px;
    left: 50px;
    width: 100px;
    height: 100px;
    opacity: 1;
  }

  &:hover > span:after {
    bottom: -50px;
    right: 50px;
    width: 100px;
    height: 100px;
    opacity: 1;
  }
`

const Span = styled.span`
  display: block;
  position: absolute;
  inset: 0;
  z-index: 50;
  pointer-events: none;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: 0.5s;
    animation: animate 2s ease-in-out infinite;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: 0.5s;
    animation: animate 2s ease-in-out infinite;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    animation-delay: -1s;
  }

  @keyframes animate {
    0%, 100% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`

const Header = styled.h2`
  font-size: 2em;
  color: #fff;
  margin-bottom: 10px;
`

const Body = styled.div`
  position: relative;
  left: 0;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  z-index: 1;
  transition: 0.5s;
  color: #fff;

  &:hover {
    left: -25px;
    padding: 60px 40px;
  }
`

const Desc = styled.p`
  font-size: 1.1em;
  margin-bottom: 10px;
  line-height: 1.4em;
`

const Features = () => {
  return (
    <Section>
      <Container>
        <Title>Features</Title>
        <Cards>
          <Card>
            <Span></Span>
            <Body>
              <Header>Card 1</Header>
              <Desc>This is sample text, this is just a placeholder to test padding and other shit.</Desc>
            </Body>
          </Card>
          <Card>
            <Span></Span>
            <Body>
              <Header>Card 2</Header>
              <Desc>This is sample text, this is just a placeholder to test padding and other shit.</Desc>
            </Body>
          </Card>
          <Card>
            <Span></Span>
            <Body>
              <Header>Card 3</Header>
              <Desc>This is sample text, this is just a placeholder to test padding and other shit.</Desc>
            </Body>
          </Card>
          <Card>
            <Span></Span>
            <Body>
              <Header>Card 4</Header>
              <Desc>This is sample text, this is just a placeholder to test padding and other shit.</Desc>
            </Body>
          </Card>
          <Card>
            <Span></Span>
            <Body>
              <Header>Card 5</Header>
              <Desc>This is sample text, this is just a placeholder to test padding and other shit.</Desc>
            </Body>
          </Card>
          <Card>
            <Span></Span>
            <Body>
              <Header>Card 6</Header>
              <Desc>This is sample text, this is just a placeholder to test padding and other shit.</Desc>
            </Body>
          </Card>
        </Cards>
      </Container>
    </Section>
  );
}

export default Features