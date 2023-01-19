import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native'
import {
  generalContainers,
  generalTexts
} from '../../BoardComponents/Weightlifter/WeightlifterStyles'
import { useEffect, useState } from 'react'

const Snatch = () => {
  return (
    <View style={generalContainers.movementAttemptContainer}>
      <View style={generalContainers.attemptContainer}>
        <Text style={generalTexts.fieldText}>1</Text>
      </View>
      <View style={generalContainers.attemptContainer}>
        <Text style={generalTexts.fieldText}>2</Text>
      </View>
      <View style={generalContainers.attemptContainer}>
        <Text style={generalTexts.fieldText}>3</Text>
      </View>
      <View style={generalContainers.attemptContainer}>
        <Text style={generalTexts.fieldText}>Result</Text>
      </View>
      <View style={generalContainers.attemptContainer}>
        <Text style={generalTexts.fieldText}>Rank</Text>
      </View>
    </View>
  )
}

export default Snatch
