import { StyleSheet } from 'react-native'

export const graphics = StyleSheet.create({
  logo: {
    width: '80%',
    height: 200,
    marginTop: 60
  }
})

export const texts = StyleSheet.create({
  title: {
    color: '#FF0A61',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20
  },
  subtitle: {
    color: '#0B1E38',
    fontWeight: 'bold',
    marginTop: 10
  },
  accountText: {
    fontSize: 15
  },
  accountTextLink: {
    fontSize: 16,
    color: '#FF0A61',
    fontWeight: 'bold'
  },
  orText:{
    paddingTop:20,
    //backgroundColor:'red'
    position:'absolute'
  }
})

export const containers = StyleSheet.create({
  main: {
    // backgroundColor: 'red',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 5
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'red',
    justifyContent: 'center',
    //alignContent:'center',
    marginTop: 25
  },
  buttonsContainer: {
    marginTop:15,
    justifyContent:'center',
    alignItems:'center'
  }
})

export const controlls = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    //backgroundColor: 'red',
    justifyContent: 'center',
    //alignContent:'center',
    marginTop: 14
  }
})
