import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import { containers,texts} from './MessageBoxStyles'

export const MessageBox = ({ message,type}) => {
  return (
    <View style={containers.main}>
    <Text style={texts.messageText}>{message}</Text>
    </View>
  )
}