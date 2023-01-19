import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { containers, texts } from './LotStyles'
import {generalContainers,generalTexts} from '../../BoardComponents/Weightlifter/WeightlifterStyles'

const Lot = () => {
  return (
    <View style={generalContainers.fieldContainer}>
      <Text style={generalTexts.fieldText}>Lot</Text>
    </View>
  )
}

export default Lot
