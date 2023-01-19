import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native'
import { containers } from './WeightlifterStyles'
import { useEffect, useState } from 'react'
import Lot from '../../AthleteComponents/Lot/Lot'
import Start from '../../AthleteComponents/Start/Start'
import Name from '../../AthleteComponents/Name/Name'
import Year from '../../AthleteComponents/Year/Year'
import Snatch from '../../AthleteComponents/Snatch/Snatch'
import CleanJerk from '../../AthleteComponents/Snatch/Snatch'
import Total from '../../AthleteComponents/Total/Total'
import Rank from '../../AthleteComponents/Rank/Rank'

const Weightlifter = () => {
  return (
    <View style={containers.weightlifterContainer}>
      <Lot />
      <Start />
      <Name />
      <Year/>
      <Snatch />
      <CleanJerk />
      <Total />
      <Rank />
    </View>
  )
}

export default Weightlifter
