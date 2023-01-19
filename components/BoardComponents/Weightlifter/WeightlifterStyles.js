import { StyleSheet } from 'react-native'

export const containers = StyleSheet.create({
  weightlifterContainer: {
    //backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: 'white',
    height: 35,
    display: 'flex',
    flexDirection: 'row'
  },
  fieldContainer: {
    backgroundColor: '#0B1E38',
    //width: '5%',
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex'
  }
})

export const generalContainers = StyleSheet.create({
  fieldContainer: {
    backgroundColor: '#0B1E38',
    width: '5%',
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex',
    justifyContent: 'center'
  },
  movementAttemptContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 300
    //backgroundColor:'red'
  },
  attemptContainer: {
    //backgroundColor: 'blue',
    borderWidth: 1,
    borderColor: 'white',
    flex: 1,
    flexBasis: 1,
    //width:100,
    justifyContent: 'center'
  },
  NameFieldContainer: {
    //backgroundColor: 'red',
    width: '25%',
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex',
    justifyContent: 'center'
  }
})

export const generalTexts = StyleSheet.create({
  fieldText: {
    color: 'white',
    textAlign: 'center'
  }
})
