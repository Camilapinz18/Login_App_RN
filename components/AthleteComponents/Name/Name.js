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

const Start = ({ title,name}) => {
  console.log('nametitlke', title)
  return (
    <View style={generalContainers.NameFieldContainer}>
      {title ? (
        <Text style={generalTexts.fieldText}>Start</Text>
      ) : (
        <Text style={generalTexts.fieldText}>{name}</Text>
      )}
    </View>
  )
}

export default Start
