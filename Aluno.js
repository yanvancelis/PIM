import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Aluno(props) {
    return (
      <View style={styles.container}>
        <Text>Nome: {props.nome}</Text>
        <Text>Idade: {props.idade}</Text>
        <Text>Cidade: {props.cidade}</Text>
        <Text>Curso: {props.curso}</Text>    
      </View>
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
  