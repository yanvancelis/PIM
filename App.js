import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './navegacao/Stack'

export default function App() {
  return (
      <SafeAreaView>
        
          <NavigationContainer>
            <Stack />
          </NavigationContainer>
      </SafeAreaView>

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
