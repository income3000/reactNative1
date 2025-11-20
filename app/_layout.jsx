import { StyleSheet, Text, View } from "react-native" 
import { Stack } from "expo-router"
export default function RootLayout() {
  return (
    <View style={ {flex: 3, paddingTop: 40} }>
       <Stack>
        <Stack.Screen name="index" options={{ title: "Home Page" }} />  
        <Stack.Screen name="about" options={{ title: "About Page" }} />
        <Stack.Screen name="contact" options={{ title: "Contact Page" }} /> 
       </Stack>
       
        <Text>Footer</Text>
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
