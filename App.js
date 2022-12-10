import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './style';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator>
        {/* <Stack.Screen name="Signin" component={SigninScreen} /> */}
        {/* <Stack.Screen name="CreateAccount" component={CreateScreen} /> */}
        {/* <Stack.Screen name="Homepage" component={HomePage} /> */}

      </Stack.Navigator>
    </NavigationContainer>

  );
}


