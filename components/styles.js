import styled from 'styled-components'
import { View, Image, Text } from 'react-native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight

export const Colors = {
  primary: '#fff',
  secondary: '#e5e7eb',
  tertiary: '#1f2937',
  darkLight: '#9ca3af',
  brand: '#6de8d9',
  green: '#10b981',
  red: '#ef4444'
}

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors

export const StyledContainer = styled.View`
    flex:1,
    padding:25px,
    padding-top:${StatusBarHeight + 10}px,
    backgroundColor:${primary}
    `
export const InnerContainer = styled.View`
flex:1,
width:100%,
align-items:center,

`
export const PageLogo = styled.Image`
width:250px,
height:200px

`
export const PageTitle = styled.Text`
font-size:30px,
text-align:center,
font-weight:bold,
color:${brand},
padding:10px

`
