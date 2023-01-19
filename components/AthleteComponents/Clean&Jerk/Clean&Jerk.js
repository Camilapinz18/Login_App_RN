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

const CleanJerk = () => {
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

export default CleanJerk
