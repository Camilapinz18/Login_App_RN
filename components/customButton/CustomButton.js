import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { controls, texts, graphics, containers } from './customButtonStyles'
import Fontisto from '@expo/vector-icons/Fontisto'

export const CustomButton = ({
  label,
  icon,
  navigation,
  handleLogin,
  handleSubmit
}) => {
  return (
    <View>
      {icon ? (
        <View style={containers.main}>
          <TouchableOpacity
            style={controls.buttonWithIcon}
            onPress={handleSubmit}
          >
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
          <TouchableOpacity
            style={controls.button}
            onPress={handleSubmit}
          >
            <Text style={texts.buttonLabel}>{label}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
