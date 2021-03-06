import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Aluno from './Aluno'
import IMC from './imc/IMCApp'

export default function App() {
  return (
    <View style={styles.container}>
      <IMC />
    </View>

    /* <View style={styles.container}>      
      <Aluno 
        nome="Yan Vancelis"
        idade="27 anos"  
        cidade="Quixadá/CE"
        curso="Design Digital"
        />        
    </View> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
