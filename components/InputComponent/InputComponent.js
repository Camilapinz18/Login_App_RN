import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { controls, containers, texts, graphics } from './inputStyles'
import { useState } from 'react'

import Octicons from '@expo/vector-icons/Octicons'

export const InputComponent = ({
  label,
  icon,
  placeholder,
  secureTextEntry,
  type,
  eye,
  editable,
  showDatePicker,
  value,
  onChangeText,
  obBlur,
  
  keyboardType,
  handleChange,handleBlur
}) => {
  //console.log(handleChange,"handlechange")

  const [hidePassword, setHidePassword] = useState(true)
  return (
    <View>
      {type === 'text' ? (
        <View style={containers.mainContainer}>
          <Text style={texts.labeltext}>{label}</Text>
          <View style={containers.inputContainer}>
            <TextInput
              style={controls.input}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              onChangeText={handleChange}
              onBlur={handleBlur}
              value={value}
            />
            <Octicons
              name={icon}
              size={20}
              color='#0B1E38'
              style={graphics.icon}
            />
          </View>
        </View>
      ) : type === 'password' ? (
        <View style={containers.mainContainer}>
          <Text style={texts.labeltext}>{label}</Text>
          <View style={containers.inputContainer}>
            <TextInput
              style={controls.input}
              placeholder={placeholder}
              secureTextEntry={hidePassword}
              onChangeText={handleChange}
              onBlur={handleBlur}
              value={value}
            />
            <Octicons
              name={icon}
              size={20}
              color='#0B1E38'
              style={graphics.icon2}
            />
            <TouchableOpacity
              style={graphics.touchable}
              onPress={() => setHidePassword(prev => !prev)}
            >
              <Octicons
                name={hidePassword ? 'eye' : 'eye-closed'}
                size={20}
                color='#0B1E38'
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : type === 'date' ? (
        <View style={containers.mainContainer}>
          <Text style={texts.labeltext}>{label}</Text>
          <TouchableOpacity
          onPress={showDatePicker}>
            <View style={containers.inputContainer}>
              <TextInput
                style={controls.input}
                placeholder={placeholder}
                
                secureTextEntry={secureTextEntry}
                editable={editable}
                value={value}
              />
              <Octicons
                name={icon}
                size={20}
                color='#0B1E38'
                style={graphics.icon}
              />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </View>
  )
}
