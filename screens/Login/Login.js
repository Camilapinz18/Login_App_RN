import React from 'react'
import { useState } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  TextInput,
  Button
} from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
import { graphics, containers, texts, controlls } from './loginStyles'
import { useNavigation } from '@react-navigation/native'
import { CustomButton } from '../../components/customButton/CustomButton'
import { InputComponent } from '../../components/InputComponent/InputComponent'
import { MessageBox } from '../../components/MessageBox/MessageBox'
import axios from 'axios'

const Login = () => {
  const navigation = useNavigation()
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleLogin = credentials => {
    console.log('estoy en handleLogin')
    const url = 'https://panicky-foal-wear.cyclic.app/api/user/signin'
    axios
      .post(url, credentials)
      .then(response => {
        const result = response.data
        const { message, status, data } = result

        if (status !== 'OK') {
          handleMessage(message, status)
          console.log('result', result)
        } else {
          console.log('result', result)
          navigation.navigate('Welcome')
        }
      })

      .catch(error => {
        console.log(error)
        handleMessage('An error ocurred', 'FAILED')
      })
  }

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message)
    setMessageType(type)
  }

  const getInputValues = () => {}

  const handlePrueba = (email, password) => {
    console.log('estoy en handle prueba')
    console.log('mail', email, 'password', password)

    const object = {
      email: email,
      password: password
    }
    axios
      .post('https://panicky-foal-wear.cyclic.app/api/poster', object)
      .then(response => console.log('response', response.data))
      .catch(error => console.log(error))
  }

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
          <View></View>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => {
              console.log('VALUES', values)
              handlePrueba(values.email, values.password)
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <InputComponent
                  label='Email address'
                  icon='mail'
                  placeholder='yourmail@mail.com'
                  type='text'
                  handleChange={handleChange('email')}
                  handleBlur={handleBlur('email')}
                  value={values.email}
                />

                <InputComponent
                  label='Password'
                  icon='lock'
                  eye='eye'
                  placeholder='******'
                  type='password'
                  handleChange={handleChange('password')}
                  handleBlur={handleBlur('password')}
                  value={values.password}
                />

                <CustomButton
                  label='Login'
                  icon={false}
                  handleSubmit={handleSubmit}
                />
                <CustomButton
                  label='Sign in with Google'
                  icon={true}
                  handleSubmit={handleSubmit}
                />
                <MessageBox message='Hola' />
              </View>
            )}
          </Formik>
          {/* <CustomButton
            label='Login'
            icon={false}
            //navigation={() => navigation.navigate('Welcome')}
            handleLogin={handleLogin}
          />
          <View>
            <CustomButton label='Sign in with Google' icon={true} />
          </View> */}
          <View style={containers.textContainer}>
            <Text style={texts.accountText}>
              Don't you have an account already?
            </Text>
            <TouchableOpacity onPressOut={() => navigation.navigate('Signup')}>
              <Text style={texts.accountTextLink}> Sign Up!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login
