import React from 'react'
import { View, Text } from 'react-native-web'
import { Link } from 'expo-router';

function Page3() {
  return (
    <View>  
    <Text> this is page3</Text>
    <Link href="/">
      <Text>Go to Home Page</Text>
    </Link> 
    </View> 
  )
}

export default Page3