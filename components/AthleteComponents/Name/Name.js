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
    <View style={generalContainers.NameFieldContainer}>
      <Text style={generalTexts.fieldText}>Name</Text>
    </View>
  )
}

export default Start
