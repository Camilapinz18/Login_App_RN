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
import * as yup from 'yup'

const Signup = () => {
  const navigation = useNavigation()
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date())
  const [birth, setBirth] = useState()
  const [isLoading, setIsLoading] = useState(false)

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
    console.log('birthDatereceived', birthDate)
    const object = {
      name: name,
      email: email,
      birthDate: birthDate,
      password: password
    }
    setIsLoading(true)
    axios
      .post('https://panicky-foal-wear.cyclic.app/api/users/signup', object)
      .then(response => {
        console.log('Estoy en response')
        if (response.data.status === 'OK') {
          console.log('foe ok')
          setIsLoading(false)
          navigation.navigate('Welcome')
        } else if (response.data.status === 'FAILED') {
          setIsLoading(false)
          alert(response.data.message)
        }
      })
  }

  const validation = () => {}

  const validationSchema = yup.object().shape({
    name: yup.string().required('a name is required'),
    startDate: yup.date().default(() => new Date()),
    birthDate: yup
      .date()
      .max(yup.ref('startDate'), "birth date can't be after today's date"),

    //min(yup.ref('date'),"error"),
    email: yup
      .string()
      .email('Invalid email')
      .required('an email address is required'),
    password: yup
      .string()
      .required('a password is required')
      .min(8, 'Password should be 8 chars minimum.')
      .matches(/^(?=.*[a-z])(?=.*[0-9])/, 'password must contain one number'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
  })

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
            console.log('VALUES', birth)
            handleSignUp(values.name, values.email, birth, values.password)
          }}
          validateOnMount={true}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
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
                  handleBlur={handleBlur('name')}
                  error={touched.name && errors.name}
                />
                <InputComponent
                  label='Email address'
                  icon='mail'
                  placeholder='yourmail@mail.com'
                  type='text'
                  handleBlur={handleBlur('email')}
                  handleChange={handleChange('email')}
                  value={values.email}
                  error={touched.email && errors.email}
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
                  handleBlur={handleBlur('birthDate')}
                  handleChange={handleChange('birthDate')}
                  value={birth ? birth.toDateString() : ''}
                  type='date'
                  editable={false}
                  showDatePicker={showDatePicker}
                  error={touched.birthDate && errors.birthDate}
                />
                <InputComponent
                  label='Password'
                  icon='lock'
                  eye='eye'
                  placeholder='******'
                  type='password'
                  handleBlur={handleBlur('password')}
                  handleChange={handleChange('password')}
                  value={values.password}
                  error={touched.password && errors.password}
                />
                <InputComponent
                  label='Confirm password'
                  icon='lock'
                  eye='eye'
                  placeholder='******'
                  type='password'
                  handleBlur={handleBlur('confirmPassword')}
                  handleChange={handleChange('confirmPassword')}
                  value={values.confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                />
              </View>
              <CustomButton
                label='Sign up'
                icon={false}
                //navigation={() => navigation.navigate('Welcome')}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
              />
              <View>
                <CustomButton
                  label='Sign up with Google'
                  icon={true}
                  isLoading={isLoading}
                />
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
