import { StatusBar, View, Text } from 'react-native';
import React from 'react';

export function Home() {
  return (
    <View style={{
      flex:1,
      alignItems: 'center',
      justifyContenet: 'center'
    }}>
      <Text style={{fontSize: 25}}> TELA TESTE!!! </Text>
    <StatusBar 
      barStyle='light-content'
      backgroundColor='#121015' 
    />
  </View>
  );
}
