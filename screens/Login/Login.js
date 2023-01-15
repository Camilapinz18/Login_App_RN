import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { graphics, containers, texts } from './loginStyles'
import { Formik } from 'formik'
import { CustomButton } from '../../components/customButton/CustomButton'
import { InputComponent } from '../../components/InputComponent/InputComponent'

const Login = () => {
  return (
    <View style={containers.main}>
      <StatusBar style='dark' />
      <Image
        source={require('../../assets/logo.png')}
        resizeMode='cover'
        style={graphics.logo}
      />
      <Text style={texts.title}>Weightlifting App</Text>
      <Text style={texts.subtitle}>Account login</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => {
          console.log('values')
        }}
      >
        {({ handleChange, handlerBlur, handleSubmit, values, errors }) => (
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
            <CustomButton label='Login' icon={false} />
            <View>
              <CustomButton label='Sign in with Google' icon={true} />
            </View>
            <View style={containers.textContainer}>
              <Text style={texts.accountText}>
                Don't you have an account already?
              </Text>
              <TouchableOpacity>
                <Text style={texts.accountTextLink}> Sign Up!</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default Login
