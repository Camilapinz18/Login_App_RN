import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native'
import { containers } from './WeighlifterTitleStyles'
import { useEffect, useState } from 'react'
import Lot from '../../AthleteComponents/Lot/Lot'
import Start from '../../AthleteComponents/Start/Start'
import Name from '../../AthleteComponents/Name/Name'
import Year from '../../AthleteComponents/Year/Year'
import Snatch from '../../AthleteComponents/Snatch/Snatch'
import CleanJerk from '../../AthleteComponents/Snatch/Snatch'
import Total from '../../AthleteComponents/Total/Total'
import Rank from '../../AthleteComponents/Rank/Rank'

const WeightlifterTitle = () => {
  //console.log('Titulo weight', title)
  return (
    <View style={containers.weightlifterContainer}>
      <Lot title={true}/>
      <Start title={true}/>
      <Name title={true} />
      <Year title={true}/>
      <Snatch title={true} />
      <CleanJerk title={true} />
      <Total title={true} />
      <Rank title={true} />
    </View>
  )
}

export default WeightlifterTitle
