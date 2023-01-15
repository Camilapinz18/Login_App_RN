import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { controls, texts, graphics, containers } from './customButtonStyles'
import Fontisto from '@expo/vector-icons/Fontisto'

export const CustomButton = ({ label, icon }) => {
  return (
    <View>
      {icon ? (
        <View>
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
        <View>
          <TouchableOpacity style={controls.button}>
            <Text style={texts.buttonLabel}>{label}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
