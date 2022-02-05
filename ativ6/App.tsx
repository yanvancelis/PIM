import { Login } from './src/screens/Login';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/screens/Tabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Tabs" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}