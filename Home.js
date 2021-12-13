import React from 'react'
import {Input, Text, Pressable} from 'react-native'
import Styles from './imc/Styles'

export default function () {
    return (
        <>
            <Pressable style={Styles.pressableInline}>
                <Text style={Styles.textPI}>Cadastro</Text>
            </Pressable>
            <Pressable style={Styles.pressableInline}>
                <Text style={Styles.textPI}>Teste seu IMC</Text>
            </Pressable>
            <Pressable style={Styles.pressableInline}>
                <Text style={Styles.textPI}>Sobre</Text>
            </Pressable>
        </>
    )
}