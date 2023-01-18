import React from 'react'
import { useState, useEffect } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
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
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'

WebBrowser.maybeCompleteAuthSession()

const Login = () => {
  const navigation = useNavigation()
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')
  const [showMessageBox, setShowMessageBox] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState(null)
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      '889998040806-uim6hgghnibpq0m14dlg1l7dalcdtojl.apps.googleusercontent.com',
    iosClientId:
      '889998040806-rmfg9j0n25gep8u6akamebvdu283fbo7.apps.googleusercontent.com',
    androidClientId:
      '889998040806-6vobth61nuf5ced3893ers7ks8bamtil.apps.googleusercontent.com'
  })

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken)
      accessToken && fetchUserInfo()
    }
  }, [response, accessToken])

  const showUserInfo = () => {
    if (user) {
      return (
        <View>
          <Text>Welcome</Text>
          <Text>{user.name}</Text>
          <Image source={{ uri: user.picture }} />
        </View>
      )
    }
  }

  async function fetchUserInfo () {
    let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    const useInfo = await response.json()
    setUser(useInfo)
  }

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
    setIsLoading(true)
    axios
      .post('https://panicky-foal-wear.cyclic.app/api/users/signin', object)
      .then(response => {
        console.log('responsedaat', response.data)
        console.log('response', response.status)
        if (response.data.status === 'OK') {
          navigation.navigate('Welcome')
          setIsLoading(false)
        } else if (response.data.status === 'FAILED') {
          if (response.data.message === 'AILED TO Signed IN') {
            setMessage(response.data.message)
            setShowMessageBox(true)
            console.log('clave incorrect')
            alert('Wrong password. Try again')
            setIsLoading(false)
          }
          //setShowMessageBox(true)
          //console.log('ESTOY EN FAILED')
          setTimeout(() => {
            setShowMessageBox(false)
          }, 3000)
        }
      })
      .catch(error => console.log(error))
  }

  // const handleGoogleSignin=()={

  // }

  return (
    <ScrollView>
      <View style={containers.main}>
        <StatusBar style='dark' />
        <Image
          source={require('../../assets/logo.png')}
          resizeMode='cover'
          style={graphics.logo}
        />

        <Text style={texts.title}>Weightlifting Trainer</Text>

        <Text style={texts.subtitle}>Account login</Text>

        <View>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => {
              console.log('VALUES', values)
              handleLogin(values.email, values.password)
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isSubmitted
            }) => (
              <View>
                <InputComponent
                  label='Email address'
                  icon='mail'
                  placeholder='youremail@email.com'
                  type='text'
                  handleChange={handleChange('email')}
                  handleBlur={handleBlur('email')}
                  value={values.email}
                />

                <InputComponent
                  label='Password'
                  icon='lock'
                  eye='eye'
                  placeholder='************'
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
                <View style={containers.buttonsContainer}>
                  <CustomButton
                    label='Login'
                    icon={false}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                  />

                  <CustomButton
                    label='Sign in with Google'
                    icon={true}
                    handleSubmit={handleSubmit}
                  />
                </View>
              </View>
            )}
          </Formik>

          {user && <showUserInfo />}
          {user === null && (
            <View>
              <Button
                title='signin'
                onPress={() => {
                  promptAsync()
                }}
              ></Button>
            </View>
          )}

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
