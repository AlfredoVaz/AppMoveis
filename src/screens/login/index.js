import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView, TextInput, StyleSheet } from 'react-native'

class Login extends Component { 
    render() {
        return(
            <>
            <SafeAreaView style={styles.body}>
                <Text style={styles.title}></Text>
                <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Login"></TextInput>
                <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Senha"></TextInput>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("Manager")}} style={styles.button}><Text style={styles.text}>Entrar</Text></TouchableOpacity>
            </SafeAreaView>
            </>
        )
    } 
}

export default Login;

const styles = StyleSheet.create({
    title:{
        marginTop: 150,
        fontSize: 35,
        color: "#2699FB"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#007FEB",
        padding: 10,
        marginTop: 20,
        marginLeft:10,
        marginRight: 10
    },
    text:{
        color: "#FFFFFF"
    },
    inputText: {
        borderColor: "#BCE0FD",
        borderRadius: 1,
        borderWidth: 1,
        backgroundColor: "white",
        width: 390,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
    },
    body:{
        backgroundColor: "white"
    }
});