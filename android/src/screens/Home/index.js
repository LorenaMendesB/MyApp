import { StatusBar, View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import {styles} from './styles'
export function Home() {
  return (
    <SefeAreaView style={
      styles.container}>
      <Text style={styles.text}> Ola, Lorena</Text>
    <TextInput style={ styles.input}
    placeholder="Digite sua tarefa..."
    placeholderTextColor="#555"
    />
    {/* <StatusBar 
      barStyle='light-content'
      backgroundColor="#121015" 
    /> */}
  <TouchableOpacity style={styles.button}>
    <Text style ={styles.buttonText}>
      Adicionar
    </Text>


  </TouchableOpacity>
  </SefeAreaView>
  );
}

// SafeAreaview evita que no ios o conteudo da tela fique por cima da barra de status.