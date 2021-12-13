import React from 'react'
import {Input, Text} from 'react-native'
import Styles from '../imc/Styles'

export default function () {
    return (
        <>
        <Text>
            Show
        </Text>
        <Pressable style={Styles.pressableInline}>
            <Text style={Styles.textPI}>Tela inicial</Text>
        </Pressable>
        </>
    )
}