import React from 'react'
import { Text, View, StyleSheet} from 'react-native';
import { Link } from 'expo-router';

export default function Contact() {
  return (
    <View style={styles.container}>
 
    

    
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />

      <Link href="/">
      <Text>Go to Home Page</Text>
    </Link>

   </View>    
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    border: "5px solid black",
  },
  box: {
    width: "45%",
    height: 150,
    alignItems: "center",
    backgroundColor: "lightblue",
    marginBottom: 20,
    border: "5px solid black",
   
    
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