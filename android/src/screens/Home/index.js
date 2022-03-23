import { StatusBar, View, Text } from 'react-native';
import React from 'react';
import {styles} from './styles'
export function Home() {
  return (
    <SefeAreaView style={
      styles.container}>
      <Text style={styles.text}> TELA TESTE!!! </Text>
    <StatusBar 
      barStyle='light-content'
      backgroundColor='#121015' 
    />
  </SefeAreaView>
  );
}

// SafeAreaview evita que no ios o conteudo da tela fique por cima da barra de status.