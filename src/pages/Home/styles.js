import styled from "styled-components/native";

export const Body = styled.View`
    background-color: #0F4EC9;
`;

export const Container = styled.View`
    border-radius: 10px;
    background-color: #4074D4;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px;
`;

export const Name = styled.Text`
    justify-content: space-between;
    font-family: 'Open Sans';
    padding: 7px;
    color: #EFF2F9;
`;

export const ContainerHeaderDados = styled.View`
    borderRadius: 10px;
    backgroundColor: #4074D4;
    flexDirection: row;
    flexWrap: wrap;
    margin: 10px;
`;


export const HeaderDados = styled.Text`
    color: #EFF2F9;
    flex: 1;
    padding: 7px;
`;


export const ContainerDados = styled.View`
    border-radius: 10px;
    background-color: #FFFFFF;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px;
    min-height: 90px;
`;

export const Dados = styled.Text`
    padding: 7px;
    color: #425667;
    justify-content: center;
`;