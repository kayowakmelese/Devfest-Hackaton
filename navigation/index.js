import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


export const TabNavigator=()=>{
const Tab = createBottomTabNavigator();


return (
    <NavigationContainer>
      <Tab.Navigator >
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}