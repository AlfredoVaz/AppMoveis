import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'

class Skills extends Component { 
    render() {
        return(
            <>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.title}>Habilidades</Text>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TextInput style={styles.inputText} placeholderTextColor="#CCCCCC" placeholder="Hab"></TextInput>
                    <TouchableOpacity style={styles.button}><Text style={styles.text}>Adicionar Habilidade</Text></TouchableOpacity>
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

export default Skills;