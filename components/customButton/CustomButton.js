import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { controls, texts, graphics, containers } from './customButtonStyles'
import Fontisto from '@expo/vector-icons/Fontisto'

export const CustomButton = ({
  label,
  icon,
  navigation,
  handleLogin,
  handleSubmit,
  isLoading
}) => {
  return (
    <View>
      {icon ? (
        <View style={containers.main}>
          <TouchableOpacity
            style={controls.buttonWithIcon}
            onPress={handleSubmit}
            disabled={isLoading ? true : false}
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
            disabled={isLoading ? true : false}
          >
            {isLoading ? (
              <ActivityIndicator size='large' color='#FF0A61' />
            ) : (
              <Text style={texts.buttonLabel}>{label}</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
