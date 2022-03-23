import { StatusBar, View, Text, TextInput } from 'react-native';
import React from 'react';
import {styles} from './styles'
export function Home() {
  return (
    <SefeAreaView style={
      styles.container}>
      <Text style={styles.text}> Ola, Lorena</Text>
    <TextInput style={ styles.input}/>
    <StatusBar 
      barStyle='light-content'
      backgroundColor='#121015' 
    />
  </SefeAreaView>
  );
}

// SafeAreaview evita que no ios o conteudo da tela fique por cima da barra de status.