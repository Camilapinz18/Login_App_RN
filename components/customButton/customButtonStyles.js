import { StyleSheet } from 'react-native'

export const containers = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'green',
    justifyContent:'space-evenly'
  }
})

export const controls = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#0B1E38',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center'
  },
  buttonWithIcon: {
    marginTop: 20,
    backgroundColor: '#0B1E38',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    //backgroundColor: 'blue'
  }
})

export const texts = StyleSheet.create({
  buttonLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export const graphics = StyleSheet.create({
  iconButton: {
    //position: 'absolute',
  }
})
