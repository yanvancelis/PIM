import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    screen: {
        flex:1,  
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        margin: 20,
        padding:0,
    },
    textoMaior: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'blue',
        textAlign: 'left',
    },
    textoMenor: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#1a1a1a'
    },

    input: {
        height: 50,
        width: '80%',
        marginTop: 10,
        borderWidth: 2,
        padding: 10,
        borderColor: '#ccc',
        borderRadius:4,
    },

    pressable: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height:60,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#1a1a1a'
    },
    pressableInline: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: 60,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#CCC'
    },

    textP: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    textPI: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#1a1a1a',
    }


})



export default styles