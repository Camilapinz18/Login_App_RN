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
  isLoading,
  handleGoogleLogin
}) => {
  return (
    <View>
      {icon ? (
        <View style={containers.main}>
          <TouchableOpacity
            style={controls.buttonWithIcon}
            //onPressOut={handleSubmit}
            onPress={() => handleGoogleLogin()}
            //disabled={isLoading ? true : false}
            disabled={true}
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
