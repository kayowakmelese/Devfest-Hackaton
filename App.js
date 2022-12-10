import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './style';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen } from './screens/SplashScreen';
import { Homepage } from './screens/Homepage';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='HomePage'>
        {/* <Stack.Screen name="Signin" component={SigninScreen} /> */}
        <Stack.Screen name="HomePage" component={Homepage} options={{headerShown:false}}/>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}


