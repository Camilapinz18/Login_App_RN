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
import { containers,texts } from '../../BoardComponents/Weightlifter/WeighlifterTitleStyles'
import { useEffect, useState } from 'react'

const CleanJerk = ({ title }) => {
  return (
    <View style={generalContainers.movementAttemptContainer}>
      {title ? (
        <View style={containers.movementNameContainer}>
          <Text style={texts.movementNameText}>Clean & Jerk</Text>
          <View style={containers.attemptNameContainer}>
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
        </View>
      ) : (
        <>
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
        </>
      )}
    </View>
  )
}

export default CleanJerk
