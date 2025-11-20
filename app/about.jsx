import { Link } from 'expo-router';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>  
    <Text>this is the about page </Text>
    <Link href="/">
      <Text>Go to Home Page</Text>
    </Link>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#333",
      border: "5px solid black",
    },                                    
      card: {  backgroundColor: "grey",       
          padding: 20,    
          marginTop: 20,
          borderRadius: 20,
          width: "80%",
          textAlign: "center",
          fontSize: 28,
          border: "5px solid black",
      },
      button: {
          marginTop: 20,
          padding: 40,        
          backgroundColor: "yellow",
          borderRadius: 5,
          border: "5px solid black",
      },
  });