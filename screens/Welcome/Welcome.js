import React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { containers, texts, graphics } from '../Welcome/welcomeStyles'
import { CustomButton } from '../../components/customButton/CustomButton'
import { useNavigation } from '@react-navigation/native'


const Welcome = () => {
    const navigation = useNavigation()

  return (
    <ScrollView>
      <StatusBar style='dark' />
      <View style={containers.main}>
        <Image
          style={graphics.image}
          source={require('../../assets/welcome.png')}
        />
        <View style={containers.info}>
          <Text style={texts.welcomeName}>Welcome Camila!</Text>
          <Text style={texts.info}>Camila Pinzón</Text>
          <Text style={texts.info}>camilapinz18@gmail.com</Text>
        </View>
        <CustomButton label='Logout' navigation={()=>navigation.navigate("Login")}/>
      </View>
    </ScrollView>
  )
}

export default Welcome
