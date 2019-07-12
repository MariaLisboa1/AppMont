import React from "react";
import { Container, Logo, Title } from "./styles";

import logo from "../../assets/Guido_Logo.png";

export default function Header() {
    return (
        <Container>
            <Logo source={logo} />
            <Title>CASAS GUIDO</Title>            
        </Container>        
    );
}
