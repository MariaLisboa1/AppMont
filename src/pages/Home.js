import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default class Home extends Component {

  render() {
    return (
      <View style={styles.component}>
        <View style={styles.Container}>
          <Text style={styles.Name}>Nome: MARIA NAZARÉ SANTOS LISBOA</Text>
          <Text style={styles.Name}>Matricula: 000588</Text>
        </View>

        <View style={styles.ContainerHeaderDados}>
          <Text style={styles.HeaderDados}>O.S</Text>
          <Text style={styles.HeaderDados}>CLIENTE</Text>
          <Text style={styles.HeaderDados}>DATA O.S</Text>
        </View>

        <View style={styles.ContainerDados}>
          <Text style={styles.Dados}>101010</Text>
          <Text style={styles.Dados}>ROZIRENE SANTOS</Text>
          <Text style={styles.Dados}>31/12/1995</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#0F4EC9'
  },
  Container: {
    borderRadius: 10,
    backgroundColor: '#4074D4',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
  },
  Name: {
    justifyContent: 'space-between',
    fontFamily: 'Open Sans',
    padding: 7,
    color: "#EFF2F9"
  },
  ContainerHeaderDados: {
    borderRadius: 10,
    backgroundColor: '#4074D4',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10
  },
  HeaderDados: {
    color: "#EFF2F9",
    flex: 1,
    padding: 7
  },
  ContainerDados: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    minHeight: 90,
  },
  Dados: {
    padding: 7,
    color: '#425667',
    justifyContent: 'center'
  }
})
