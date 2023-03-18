import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    background-color: #21b7ff;
    border-radius: 0px 0px 40px 40px;

    @media only screen and (max-width: 768px) {
      width: 100%;
      padding: 20px;
    }
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 50px;
    margin-left: 50px;
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px) {
      display: none;
    }
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icon = styled.img`
    width: 30px;
    cursor: pointer;
    color: white;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;


const Button = styled.button`
    width: 140px;
    padding: 15px;
    background-color: #212222;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 30px;
`;

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                <Logo src="./img/aoi.png"/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Thoughts</ListItem>
                    <ListItem>Features</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
                </Links>
                <Icons>
                    <Button>Discord Support</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar