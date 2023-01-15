import React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { graphics, containers, texts } from './signupStyles'
import { Formik } from 'formik'
import { CustomButton } from '../../components/customButton/CustomButton'
import { InputComponent } from '../../components/InputComponent/InputComponent'
import DateTimePicker from '@react-native-community/datetimepicker'

const Signup = () => {
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date())
  const [birth, setBirth] = useState()

  const onChange=(event,selectedDate)=>{
    const currentDate=date
    setShow(false)
    setDate(selectedDate)
    setBirth(selectedDate)
    {console.log("currentDate",currentDate.toDateString())}
    {console.log("birth",birth.toDateString())}
  }

  const showDatePicker=()=>{
    setShow(true)
  }

  return (
    <ScrollView>
      <View style={containers.main}>
        <StatusBar style='dark' />

        <Text style={texts.title}>Weightlifting App</Text>
        <Text style={texts.subtitle}>Account sign-up</Text>

        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode='date'
            is24Hour={true}
            display='default'
            onChange={onChange}
          />
        )}

        <Formik
          initialValues={{
            fullName: '',
            email: '',
            birthDate: '',
            password: '',
            confirmPassword: ''
          }}
          onSubmit={values => {
            console.log('values')
          }}
        >
          {({ handleChange, handlerBlur, handleSubmit, values, errors }) => (
            <View>
              <View>
                <InputComponent
                  label='Full name'
                  icon='person'
                  placeholder='yourmail@mail.com'
                  type='text'
                  value={values.fullName}
                  //onChangeText={handleChange}
                />
                <InputComponent
                  label='Email address'
                  icon='mail'
                  placeholder='yourmail@mail.com'
                  type='text'
                  value={values.email}
                />
                <InputComponent
                  label='Birth date'
                  icon='calendar'
                  placeholder='DD/MM/YYYY'
           
                  value={birth? birth.toDateString():''}
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
                  value={values.password}
                />
                <InputComponent
                  label='Confirm password'
                  icon='lock'
                  eye='eye'
                  placeholder='******'
                  type='password'
                  value={values.confirmPassword}
                />
              </View>
              <CustomButton label='Login' icon={false} />
              <View>
                <CustomButton label='Sign up with Google' icon={true} />
              </View>
              <View style={containers.textContainer}>
                <Text style={texts.accountText}>
                  You already have an account?
                </Text>
                <TouchableOpacity>
                  <Text style={texts.accountTextLink}> Login!</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  )
}

export default Signup
