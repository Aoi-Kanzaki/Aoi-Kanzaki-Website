import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import Cube from "../utils/Cube";

const Section = styled.div`
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  scroll-snap-align: center;
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 55px;
  }
`
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Line = styled.img`
  height: 6px;
`
const Subtitle = styled.h2`
  color: #21b7ff;
`
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`
const Button = styled.button`
  background-color: #21b7ff;
  color: white;
  font-weight: 500;
  width: 140px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`

const About = () => {
    return (
        <Section>
          <Container>
            <Left>
              <Canvas camera={{fov: 25, position:[5, 5, 5]}}>
                  <OrbitControls enableZoom={false} autoRotate/>
                  <ambientLight intensity={1}/>
                  <directionalLight position={[3,2,1]}/>
                  <Cube/>
              </Canvas>
            </Left>
            <Right>
              <Title>We think outside the box</Title>
              <WhatWeDo>
                <Line src="./img/line.png"/>
                <Subtitle>What's a feature a user needs and will use?</Subtitle>
              </WhatWeDo>
              <Desc>That's the question we ask ourselves whenever we think of the next feature Aoi needs. "What is the next feature we should add, and will it bring more quality of life to our users server?"</Desc>
              <Button>Browse Features</Button>
            </Right>
          </Container>
        </Section>
    )
}

export default About