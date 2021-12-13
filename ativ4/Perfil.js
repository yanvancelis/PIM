import React from 'react'
import {Text, Image, Input, View} from 'react-native'

export default function (props) {
    return (
        <>
            <Image source={require('../img/user.png')}></Image>
            <Text>
                Nome: {props.nome}
                Idade: {props.idade}
                Curso: {props.curso}
            </Text>
        </>
    )
}