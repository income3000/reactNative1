import { StyleSheet, Text, View, Image, Button } from "react-native";
import Logo from '../assets/images/icon.png';       
import { Link } from "expo-router"; 

 const HomePage = () => {
  return (
    <View style={styles.container}> 
    <Image
        source={Logo} 
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />
    <Text style={styles.title}>Welcome to the Home Page!</Text> 
    <span> </span>
    <Text style={styles.card}>this is a list </Text>     
    <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
    <span>
    <Link href="/about">
      <Text style={styles.card}>Go to About Page</Text>
    </Link>
 </span>
 <span>
    <Link href="/contact">
      <Text style={styles.card}>Contact Page</Text>
    </Link>
    </span>
    </View>         
   );
};
            
export default HomePage;

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