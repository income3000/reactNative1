import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
      
import { Link } from "expo-router"; 

 const HomePage = () => {
  return (
     <View style={styles.container}>
      <Text style={styles.card}>Welcome to the Home Page</Text>
     
        
     <Link href="/page1">
        <TouchableOpacity style={styles.box} onpress={ () => alert('Box 1 pressed!') }>
          <Text>page 1</Text>
          
        </TouchableOpacity>
        </Link>
        <Link href="/page2">
        <TouchableOpacity style={styles.box} onpress={ () => alert('Box 1 pressed!') }>
          <Text>page 2</Text>
          
        </TouchableOpacity>
        </Link>

        <Link href="/page3">
        <TouchableOpacity style={styles.box} onpress={ () => alert('Box 1 pressed!') }>
          <Text>page 3</Text>
          
        </TouchableOpacity>
        </Link>


        <Link href="/page4">
        <TouchableOpacity style={styles.box} onpress={ () => alert('Box 1 pressed!') }>
          <Text>page 4</Text>
          
        </TouchableOpacity>
        </Link>
     
          
    
         
    <Link href="/about">
      <Text>Go to About Page</Text>
    </Link>
    <Link href="/page1">
      <Text>Go Page</Text>
    </Link>
    <Link href="/contact">
      <Text>Go to Contact Page</Text>
    </Link>
       </View>     
   );
};
            
export default HomePage;

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
    width: "200px",
    height: "150px",
    alignItems: "center",
    backgroundColor: "lightblue",
    marginBottom: 20,
    padding: 50,
    border: "5px solid black",
   
    
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    border: "5px solid black",
  },                                    
    card: {  backgroundColor: "grey", 
      alignItems: "center",      
        padding: 20,    
        marginTop: 20,
        marginLeft: "auto",   
        marginRight: "auto",
        BorderRadius: 20,
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