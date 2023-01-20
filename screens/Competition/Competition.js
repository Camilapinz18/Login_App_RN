import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native'
import { useEffect, useState } from 'react'
import { containers } from './CompetitionStyles'
import Titles from '../../components/BoardComponents/Titles/Titles'
import Weightlifter from '../../components/BoardComponents/Weightlifter/Weightlifter'
import WeightlifterTitle from '../../components/BoardComponents/Weightlifter/WeightlifterTitle'
import data from '../../data.json'

const Competition = () => {
  //console.log('data', data)

  return (
    <ScrollView horizontal={true}>
      <View style={containers.main}>
        <View style={containers.boardContainer}>
          {/* <Titles /> */}

          <View style={containers.athletes}>
            <WeightlifterTitle />
            {data.map(athlete => {
              return <Weightlifter {...athlete} />
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Competition
