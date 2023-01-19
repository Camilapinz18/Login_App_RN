import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native'
import { useEffect, useState } from 'react'
import {
  generalContainers,
  generalTexts
} from '../../BoardComponents/Weightlifter/WeightlifterStyles'

const Start = () => {
  return (
    <View style={generalContainers.fieldContainer}>
      <Text style={generalTexts.fieldText}>Total</Text>
    </View>
  )
}

export default Start
