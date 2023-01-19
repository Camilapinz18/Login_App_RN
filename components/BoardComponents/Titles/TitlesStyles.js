import { StyleSheet } from 'react-native'

export const containers = StyleSheet.create({
 
  titleContainer: {
    //backgroundColor: '#0B1E38',
    width: '5%',
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex'
  },
  titlesMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    height:50,
    backgroundColor:'#FF0A61'
    
  },
  movementContainer: {
    display: 'flex',
    width: 300,
    //backgroundColor: 'red'
  },
  attemptsContainer: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'pink'
  },
  specificMovementContainer: {
    width: '100%',
    //backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'white',
  },
  movementAttempt: {
    //backgroundColor:'blue',
    borderWidth: 1,
    borderColor: 'white',
    flex:1
  }
})

export const texts = StyleSheet.create({
  textTitle: {
    //fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
})
