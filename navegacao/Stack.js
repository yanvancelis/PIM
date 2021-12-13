import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import IMC from '../imc/IMCApp'
import Cadastro from '../ativ4/Cadastro'
import Sobre from '../ativ4/Sobre'
import Home from '../Home'

const Stack = createStackNavigator()

export default function (props) {
    return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="IMC" component={IMC} />
        <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
    )
    
}