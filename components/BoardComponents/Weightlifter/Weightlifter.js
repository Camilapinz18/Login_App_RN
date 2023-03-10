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

const Weightlifter = (props) => {
 console.log("recive",props)
  return (
    <View style={containers.weightlifterContainer}>
      <Lot lot={props.lot}/>
      <Start start={props.start}/>
      <Name name={props.name}/>
      <Year year={props.year} />
      <Snatch />
      <CleanJerk />
      <Total />
      <Rank />
    </View>
  )
}

export default Weightlifter
