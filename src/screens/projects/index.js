import React, { Component } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'

class Projects extends Component { 
    render() {
        return(
            <>
            <SafeAreaView style={styles.container}>
              <Text style={styles.title}>Primeiro Projeto</Text>
              <TouchableOpacity style={styles.button}><Text style={styles.text}>Alterar Foto</Text></TouchableOpacity>
              <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Titulo"></TextInput>
              <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Texto"></TextInput>

              <Text style={styles.title}>Segundo Projeto</Text>
              <TouchableOpacity style={styles.button}><Text style={styles.text}>Alterar Foto</Text></TouchableOpacity>
              <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Titulo"></TextInput>
              <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Texto"></TextInput>
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

export default Projects;