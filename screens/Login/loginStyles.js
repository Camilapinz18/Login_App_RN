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
  }
})

export const containers = StyleSheet.create({
  main: {
    // backgroundColor: 'red',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
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


export const controlls = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    
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
