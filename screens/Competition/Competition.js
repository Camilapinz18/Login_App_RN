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

const Competition = () => {
  return (
    <View style={containers.main}>
      <ScrollView>
        <View style={containers.boardContainer}>
          <Titles />
          <ScrollView horizontal={true}>
            <View style={containers.athletes}>
              <Weightlifter />
              <Weightlifter />
              <Weightlifter />
              <Weightlifter />
              <Weightlifter />
              <Weightlifter />
              <Weightlifter />
              <Weightlifter />
              <Weightlifter />
              <Weightlifter />
              <Weightlifter />
              <Weightlifter />
              <Weightlifter />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}

export default Competition
