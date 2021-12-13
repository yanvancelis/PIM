import React, {useState} from 'react'
import {View, TextInput, Pressable, Text} from 'react-native'
import styles from '../imc/Styles'

export default function() {
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [email, setEmail] = useState("")

    return (
        <>
            <View style={styles.screen}>
                <TextInput 
                    style={styles.input}
                    placeholder="Seu nome"
                    /* onChangeText={addAltura} */
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Sua idade"
                    /* onChangeText={addAltura} */
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Seu e-mail"
                    /* onChangeText={addAltura} */
                />
                <Pressable style={styles.pressable}>
                <Text style={styles.textP}>Cadastrar</Text>
            </Pressable>
            </View>
        </>
    )
}