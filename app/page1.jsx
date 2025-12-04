import { Link } from 'expo-router';
import React from 'react'
import { View,  Text } from 'react-native';


export default function Page1() {
  return (
    <View>  
    <Text> this page1</Text>
    <Link href="/">
      <Text>Go to Home Page</Text>
    </Link> 
    </View>
  )
}

