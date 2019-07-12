import React from 'react';

import { Body, Container, Name, ContainerHeaderDados, HeaderDados, ContainerDados, Dados } from './styles';

export default function Home() {
    return (
      <Body>
          <Container>
            <Name>Nome: MARIA NAZARÉ SANTOS LISBOA</Name>
            <Name>Matricula: 000588</Name>
          </Container>

          <ContainerHeaderDados>
              <HeaderDados>O.S</HeaderDados>
              <HeaderDados>CLIENTE</HeaderDados>
              <HeaderDados>DATA O.S</HeaderDados>
          </ContainerHeaderDados>

          <ContainerDados>
            <Dados>101010</Dados>
            <Dados>ROZIRENE SANTOS</Dados>
            <Dados>31/12/1995</Dados>
          </ContainerDados>
      </Body>
    )
}
