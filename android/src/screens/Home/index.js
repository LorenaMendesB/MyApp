import React from 'react';
import { SafeAreaView, Text , TextInput ,
 TouchbleOpacity} from 'react-native';

import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text}>
        Lorena Mendes Barbosa!
      </Text>

    </SafeAreaView>
  );
}