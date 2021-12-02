import React from 'react'
import {View, Text} from 'react-native'
import Styles from './Styles'

export default function (props) {

    function imcResultado () {
        const imc = Number(parseFloat(props.peso / (props.altura * props.altura)).toFixed(2))
      
            if (imc <= 18.5) {
                return "Abaixo do peso"
            }
            if ((imc <= 24.9) && (imc >= 18.5)) {
                return "Peso normal"
            }  
            if ((imc >= 25) && (imc <= 29.9)) {
                return
            }
            if ((imc >= 30) && (imc <= 34.9)) {
                return "Obesidade Grau I"
            }
                
            if ((imc >= 35) && (imc <= 39.9)) {
                console.log("Obesidade Grau II")
                return
            }
            
            return "Obesidade Grau III ou mórbida"
    }

    return (
        <>
            <Text style={Styles.textoMenor}>
                {imcResultado()}
            </Text>
        </>
    )
}