import { StatusBar, View, Text } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={{
      flex:1,
      alignItems: 'center',
      justifyContenet: 'center'
    }}>
      <Text> React native teste</Text>
    <StatusBar 
      barStyle='light-content'
      backgroundColor='#121015' 
    />
    <Home />
  </View>
  );
}
