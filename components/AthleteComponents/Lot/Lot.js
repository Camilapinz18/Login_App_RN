import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { containers, texts } from './LotStyles'
import {
  generalContainers,
  generalTexts
} from '../../BoardComponents/Weightlifter/WeightlifterStyles'

const Lot = ({title,lot}) => {
  console.log("title",title)
  return (
    <View style={generalContainers.fieldContainer}>
      {title ===true? (
        <Text style={generalTexts.fieldText}>Lot</Text>
      ) : (
        <Text style={generalTexts.fieldText}>{lot}</Text>
      )}
    </View>
  )
}

export default Lot
