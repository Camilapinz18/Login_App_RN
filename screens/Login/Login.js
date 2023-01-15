import React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { graphics, containers, texts } from './loginStyles'
import { useNavigation } from '@react-navigation/native'
import { CustomButton } from '../../components/customButton/CustomButton'
import { InputComponent } from '../../components/InputComponent/InputComponent'

const Login = () => {
  const navigation = useNavigation()
  return (
    <ScrollView>
      <View style={containers.main}>
        <StatusBar style='dark' />
        <Image
          source={require('../../assets/logo.png')}
          resizeMode='cover'
          style={graphics.logo}
        />
        <Text style={texts.title}>Weightlifting App</Text>
        <Text style={texts.subtitle}>Account login</Text>

        <View>
          <View>
            <InputComponent
              label='Email address'
              icon='mail'
              placeholder='yourmail@mail.com'
              type='text'
            />
            <InputComponent
              label='Password'
              icon='lock'
              eye='eye'
              placeholder='******'
              type='password'
            />
          </View>
          <CustomButton label='Login' icon={false} navigation={()=>navigation.navigate("Welcome")}/>
          <View>
            <CustomButton label='Sign in with Google' icon={true} />
          </View>
          <View style={containers.textContainer}>
            <Text style={texts.accountText}>
              Don't you have an account already?
            </Text>
            <TouchableOpacity onPressOut={()=>navigation.navigate('Signup')}>
              <Text style={texts.accountTextLink}> Sign Up!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login
