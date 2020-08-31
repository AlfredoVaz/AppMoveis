import React, { Component } from 'react';
import { Text, TouchableOpacity, View, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

class Home extends Component { 
    render() {
        return(
            <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.title}>Home</Text>
                    <TouchableOpacity style={styles.button}><Text style={styles.text}>Alterar Foto</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button}><Text style={styles.text}>Alterar CV</Text></TouchableOpacity>

                    <Text style={styles.title}>Interesses</Text>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Interesse 1"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Interesse 2"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Interesse 3"></TextInput>

                    <Text style={styles.title}>Idiomas</Text>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Idioma 1"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Idioma 2"></TextInput>

                    <Text style={styles.title}>Formação</Text>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Formação 1"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Formação 2"></TextInput>
                </ScrollView>
            </SafeAreaView>
            </>
        )
    } 
}

const styles = StyleSheet.create({
  title:{
    marginTop: 20,
    fontSize: 35,
    color: "#2699FB"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "white"
  },
  text:{
    color: "#FFFFFF"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#007FEB",
    padding: 10,
    marginTop: 20
  },
  inputText: {
    borderColor: "#BCE0FD",
    borderRadius: 1,
    borderWidth: 1,
    backgroundColor: "white",
    width: 390,
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  }

});

export default Home;