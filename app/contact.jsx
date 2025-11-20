import React from 'react'
import { Text, View, StyleSheet} from 'react-native';
import { Link } from 'expo-router';

export default function Contact() {
  return (
    <View>
    <Text>Contact page </Text>
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