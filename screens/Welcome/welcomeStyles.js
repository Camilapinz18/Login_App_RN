import { StyleSheet } from 'react-native'

export const containers = StyleSheet.create({
  main: {
    //backgroundColor: 'blue',
    display: 'flex',
    width: '100%'
    //paddingTop:50
  },
  info:{
    marginTop:15,
    display: 'flex',
    
    alignItems:'center'
  }
})

export const texts = StyleSheet.create({
    welcomeName: {
    color: '#FF0A61',
    //backgroundColor: 'red',
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold',
   
  },
  info:{
    marginTop:10,
    fontSize:20
  }
})

export const graphics = StyleSheet.create({
  image: {
    width: '100%',
    height: 400
    // height:'100%'
  }
})
