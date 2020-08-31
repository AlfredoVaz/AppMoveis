import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

class Manager extends Component { 
    render() {
        return(
            <>
            <View style={styles.container}>
                <Text style={styles.title}>Gerenciar Sections</Text>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("Home")}} style={styles.button}><Text style={styles.text}>Home</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("Skills")}} style={styles.button}><Text style={styles.text}>Habilidades</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("Blogs")}} style={styles.button}><Text style={styles.text}>Blogs</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("Projects")}} style={styles.button}><Text style={styles.text}>Projetos</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate("About")}} style={styles.button}><Text style={styles.text}>Sobre</Text></TouchableOpacity>
            </View>
            </>
        )
    } 
}

const styles = StyleSheet.create({
    title:{
      fontSize: 35,
      color: "#2699FB",
      marginLeft: 40
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
      marginTop: 20,
      marginLeft:10,
      marginRight: 10
    },
    inputText: {
      borderColor: "#BCE0FD",
      borderRadius: 1,
      backgroundColor: "white",
      width: 1000,
      padding: 10,
      marginTop: 10,
      marginBottom: 10
    }

  });
  

export default Manager;