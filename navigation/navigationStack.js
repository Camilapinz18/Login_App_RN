import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login/Login'
import Signup from '../screens/SignUp/Signup'
import Welcome from '../screens/Welcome/Welcome'

const Stack = createNativeStackNavigator()

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Welcome' component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack
