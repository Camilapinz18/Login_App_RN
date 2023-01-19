import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    Button,
  } from 'react-native'
import {containers,texts} from './TitlesStyles'
const Titles = () => {
  return (
    <View style={containers.titlesMainContainer}>
      <View style={containers.titleContainer}>
        <Text style={texts.textTitle}>Lot</Text>
      </View>

      <View style={containers.titleContainer}>
        <Text style={texts.textTitle}>Start</Text>
      </View>

      <View style={containers.titleContainer}>
        <Text style={texts.textTitle}>Name</Text>
      </View>

      <View style={containers.titleContainer}>
        <Text style={texts.textTitle}>Year</Text>
      </View>

      <View style={containers.movementContainer}>
        <View style={containers.specificMovementContainer}>
          <Text style={texts.textTitle}>Snatch</Text>
        </View>
        <View style={containers.attemptsContainer}>
          <View style={containers.movementAttempt}>
            <Text style={texts.textTitle}>1</Text>
          </View>
          <View style={containers.movementAttempt}>
            <Text style={texts.textTitle}>2</Text>
          </View>
          <View style={containers.movementAttempt}>
            <Text style={texts.textTitle}>3</Text>
          </View>
          <View style={containers.movementAttempt}>
            <Text style={texts.textTitle}>Result</Text>
          </View>
          <View style={containers.movementAttempt}>
            <Text style={texts.textTitle}>Rank</Text>
          </View>
        </View>
      </View>

      <View style={containers.movementContainer}>
        <View style={containers.specificMovementContainer}>
          <Text style={texts.textTitle}>Clean&Jerk</Text>
        </View>
        <View style={containers.attemptsContainer}>
          <View style={containers.movementAttempt}>
            <Text style={texts.textTitle}>1</Text>
          </View>
          <View style={containers.movementAttempt}>
            <Text style={texts.textTitle}>2</Text>
          </View>
          <View style={containers.movementAttempt}>
            <Text style={texts.textTitle}>3</Text>
          </View>
          <View style={containers.movementAttempt}>
            <Text style={texts.textTitle}>Result</Text>
          </View>
          <View style={containers.movementAttempt}>
            <Text style={texts.textTitle}>Rank</Text>
          </View>
        </View>
      </View>

      <View style={containers.titleContainer}>
        <Text style={texts.textTitle}>Total</Text>
      </View>
      <View style={containers.titleContainer}>
        <Text style={texts.textTitle}>Rank</Text>
      </View>
    </View>
  )
}

export default Titles