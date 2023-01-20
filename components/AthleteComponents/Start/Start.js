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

const Start = ({title,start}) => {
  return (
    <View style={generalContainers.fieldContainer}>
     {title? (
      <Text style={generalTexts.fieldText}>Start</Text>):( <Text style={generalTexts.fieldText}>{start}</Text>)}
    </View>
  )
}

export default Start
