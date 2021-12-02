import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, Pressable, UselessTextInput, View, Text, TextInput, Button} from 'react-native'
import IMCCalc from './IMCCalc'
import CalcIMC from './IMCCalc'
import styles from './Styles'

export default function() {
    const [altura, addAltura] = React.useState("0")
    const [peso, addPeso] = React.useState("0")
    const [imc, setIMC] = useState(true)

    let result = false;
    return ( 
        <>             
        <Text style={styles.textoMaior}>Calcule seu IMC</Text> 
        
        <TextInput 
                style={styles.input}
                placeholder="Sua altura"
                onChangeText={addAltura}
                keyboardType="numeric"
        />
            
            
        <TextInput 
                style={styles.input}
                placeholder="Seu peso"
                onChangeText={addPeso}
                keyboardType="numeric"
        />
        { imc ? 
            <Pressable style={styles.pressable} onPress={() => setIMC(!imc)}>
                <Text style={styles.textP}>Calcular IMC</Text>
            </Pressable>
        :
            <Pressable style={styles.pressableInline} onPress={() => setIMC(!imc)}>
                <Text style={styles.textPI}>Calcular novamente</Text>
            </Pressable>
        }
            
            

           
            { imc ? <Text></Text>
            :  
            <IMCCalc altura={altura} peso={peso}/>
            }
             
        </>
    )
}

