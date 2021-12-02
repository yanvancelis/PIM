import React, {useState} from 'react'
import {StyleSheet, View, Text, Button, TextPropTypes} from 'react-native'
import IMCMsg from './IMCMsg'
import Styles from './Styles'

export default function (props) {
    return (
        <>
        <View style={Styles.box}>
        <Text style={Styles.textoMaior}>
                Seu valor do IMC é {parseFloat(props.peso / (props.altura * props.altura)).toFixed(2)}      
            </Text>
           <IMCMsg peso = {props.peso} altura = {props.altura}/>
        </View>
            
        </>
        
    )
}

/* const style = StyleSheet.create({
    texto: {
        fontWeight: 'bold',
        fontSize: 24,
    }
})

*/

