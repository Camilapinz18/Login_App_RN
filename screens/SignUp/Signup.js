import React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { graphics, containers, texts } from './signupStyles'
import { useNavigation } from '@react-navigation/native'
import { CustomButton } from '../../components/customButton/CustomButton'
import { InputComponent } from '../../components/InputComponent/InputComponent'
import DateTimePicker from '@react-native-community/datetimepicker'
import axios from 'axios'
import { Formik } from 'formik'

const Signup = () => {
  const navigation = useNavigation()
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date())
  const [birth, setBirth] = useState()

  const onChange = (event, selectedDate) => {
    setShow(false)

    setBirth(selectedDate)

    //console.log('birth_', birth.toString())
  }

  const showDatePicker = () => {
    setShow(true)
  }

  const handleSignUp = (name, email, birthDate, password) => {
    console.log('estoy en handle SignUp')
    //console.log('birthDatereceived', birthDate)
    const object = {
      name: name,
      email: email,
      birthDate: birthDate,
      password: password
    }

    axios
      .post('https://panicky-foal-wear.cyclic.app/api/users/signup', object)
      .then(response => {
        console.log('Estoy en response')
        if (response.data.status === 'OK') {
          console.log('foe ok')

          navigation.navigate('Welcome')
        } else if (response.data.status === 'FAILED'){
          console.log('clave incorrect')
          alert(response.data.message)
        }
      })
  }

  return (
    <ScrollView>
      <View style={containers.main}>
        <StatusBar style='dark' />

        <Text style={texts.title}>Weightlifting App</Text>
        <Text style={texts.subtitle}>Account sign-up</Text>

        <Formik
          initialValues={{
            name: '',
            email: '',
            birthDate: '',
            password: '',
            confirmPassword: ''
          }}
          onSubmit={values => {
            //console.log('VALUES', values)
            handleSignUp(values.name, values.email, birth, values.password)
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
              <View>
                <InputComponent
                  label='Full name'
                  icon='person'
                  placeholder='yourmail@mail.com'
                  type='text'
                  handleChange={handleChange('name')}
                  value={values.name}
                  //onChangeText={handleChange}
                />
                <InputComponent
                  label='Email address'
                  icon='mail'
                  placeholder='yourmail@mail.com'
                  type='text'
                  handleChange={handleChange('email')}
                  value={values.email}
                />
                {show && (
                  <DateTimePicker
                    testID='dateTimePicker'
                    value={date}
                    mode='date'
                    is24Hour={true}
                    display='default'
                    handleChange={handleChange('birthDate')}
                    onChange={onChange}
                  />
                )}
                <InputComponent
                  label='Birth date'
                  icon='calendar'
                  placeholder='DD/MM/YYYY'
                  handleChange={handleChange('birthDate')}
                  value={birth ? birth.toDateString() : ''}
                  type='date'
                  editable={false}
                  showDatePicker={showDatePicker}
                />
                <InputComponent
                  label='Password'
                  icon='lock'
                  eye='eye'
                  placeholder='******'
                  type='password'
                  handleChange={handleChange('password')}
                  value={values.password}
                />
                <InputComponent
                  label='Confirm password'
                  icon='lock'
                  eye='eye'
                  placeholder='******'
                  type='password'
                  handleChange={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                />
              </View>
              <CustomButton
                label='Sign up'
                icon={false}
                //navigation={() => navigation.navigate('Welcome')}
                handleSubmit={handleSubmit}
              />
              <View>
                <CustomButton label='Sign up with Google' icon={true} />
              </View>
            </View>
          )}
        </Formik>
        <View style={containers.textContainer}>
          <Text style={texts.accountText}>You already have an account?</Text>
          <TouchableOpacity onPressOut={() => navigation.navigate('Login')}>
            <Text style={texts.accountTextLink}> Login!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Signup
