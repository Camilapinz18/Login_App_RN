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
  const [showMessageBox, setShowMessageBox] = useState(false)

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message)
    setMessageType(type)
  }

  const getInputValues = () => {}

  const handleLogin = (email, password) => {
    console.log('estoy en handle login')
    //console.log('mail', email, 'password', password)

    const object = {
      email: email,
      password: password
    }
    axios
      .post('https://panicky-foal-wear.cyclic.app/api/users/signin', object)
      .then(response => {
        console.log('responsedaat', response.data)
        console.log('response', response.status)
        if (response.data.status === 'OK') {
          navigation.navigate('Welcome')
        } else if (response.data.status === 'FAILED') {
          setShowMessageBox(true)
          console.log('ESTOY EN FAILED')
          setTimeout(() => {
            setShowMessageBox(false)
          }, 3000)
        }
      })
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
              handleLogin(values.email, values.password)
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
                {showMessageBox ? (
                  <MessageBox message='Failed to sign-up' />
                ) : (
                  ''
                )}

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
