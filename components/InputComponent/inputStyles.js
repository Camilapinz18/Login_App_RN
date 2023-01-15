import { StyleSheet } from 'react-native'

export const containers = StyleSheet.create({
  mainContainer: {
    marginTop: 20
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 5,
    width: 280,
    paddingLeft: 40,
    paddingRight: 10
  }
})

export const controls = StyleSheet.create({
  input: {
    justifyContent: 'flex-end',
    width: '100%',
    height: 50,
    borderRadius: 5,
    paddingLeft: 10,
    color:'black'
  }
})

export const texts = StyleSheet.create({
  labeltext: {
    marginBottom: 5
  }
})

export const graphics = StyleSheet.create({
  icon: {
    position: 'absolute',
    marginLeft: 18,
  
  },

  touchable: {
    position: 'absolute',
    width: 20,
    height: "100%",
    marginLeft: 250,
   // backgroundColor:'red',
    display:'flex',
    justifyContent:'center'
  }
})
