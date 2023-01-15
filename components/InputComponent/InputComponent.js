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
  eye
}) => {
  // console.log(icon)

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
            />
            <Octicons
              name={icon}
              size={20}
              color='#0B1E38'
              style={graphics.icon}
            />
          </View>
        </View>
      ) : (
        <View style={containers.mainContainer}>
          <Text style={texts.labeltext}>{label}</Text>
          <View style={containers.inputContainer}>
            <TextInput
              style={controls.input}
              placeholder={placeholder}
              secureTextEntry={hidePassword}
            />
            <Octicons
              name={icon}
              size={20}
              color='#0B1E38'
              style={graphics.icon}
            />
            <TouchableOpacity
              style={graphics.touchable}
              onPress={() => setHidePassword(prev => !prev)}
            >
              <Octicons name={hidePassword?'eye':'eye-closed'} size={20} color='#0B1E38' />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}
