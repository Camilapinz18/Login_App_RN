import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { controls, texts, graphics, containers } from './customButtonStyles'
import Fontisto from '@expo/vector-icons/Fontisto'

export const CustomButton = ({ label, icon,navigation }) => {
  return (
    <View>
      {icon ? (
        <View style={containers.main}>
          <TouchableOpacity style={controls.buttonWithIcon}>
            <View style={containers.buttonContainer}>
              <Fontisto
                name='google'
                size={20}
                color='white'
                style={graphics.iconButton}
              />
              <Text style={texts.buttonLabel}>{label}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={containers.main}>
          <TouchableOpacity style={controls.button} onPress={navigation}>
            <Text style={texts.buttonLabel}>{label}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
