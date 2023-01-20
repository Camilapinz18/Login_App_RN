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

const Start = ({title,year}) => {
  return (
    <View style={generalContainers.fieldContainer}>
     {title ===true? ( <Text style={generalTexts.fieldText}>Year</Text>):( <Text style={generalTexts.fieldText}>{year}</Text>)}
     
    </View>
  )
}

export default Start
