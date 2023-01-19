import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login/Login'
import Signup from '../screens/SignUp/Signup'
import Welcome from '../screens/Welcome/Welcome'
import Competition from '../screens/Competition/Competition'

const Stack = createNativeStackNavigator()

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      >
        {/* <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Welcome' component={Welcome} /> */}
        <Stack.Screen name='Competition' component={Competition} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack
