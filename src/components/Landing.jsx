import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  scroll-snap-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`

const Container = styled.div`
  scroll-snap-align: center;
  height: 100%;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`
const Right = styled.div`
  flex: 3;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
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

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 10px;
`

const Button = styled.button`
  background-color: #21b7ff;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 13px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
const Img = styled.img`
  width: 300px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px)
    }
  }
`



const Landing = () => {
    return (
        <Section>
          <Navbar/>
          <Container>
            <Left>
              <Title>Aoi Kanzaki</Title>
              <WhatWeDo>
                <Line src="./img/line.png"/>
                <Subtitle>by Jonny</Subtitle>
              </WhatWeDo>
              <Desc>Aoi is a multi function bot, that can help you with anything!</Desc>
              <Buttons>
                <Button>Learn More</Button>
                <Button>Source</Button>
              </Buttons>
            </Left>
            <Right>
              <Canvas>
                  <OrbitControls enableZoom={false}/>
                  <ambientLight intensity={1}/>
                  <directionalLight position={[3,2,1]}/>
                  <Sphere args={[1, 100, 200]} scale={1.75}>
                    <MeshDistortMaterial
                      color="#21b7ff" attach="material" distort={0.5} speed={2}
                    />
                  </Sphere>
              </Canvas>
              <Img src="./img/aoi.png"/>
            </Right>
          </Container>
        </Section>
    )
}

export default Landing