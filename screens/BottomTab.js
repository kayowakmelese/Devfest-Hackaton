import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import SettingScreen from "./screens/SettingScreen";

const TabNavigator = createBottomTabNavigator({
Home: {
	screen: HomeScreen,
	navigationOptions: {
	tabBarLabel: "Home",
	tabBarOptions: {
		activeTintColor: "#006600",
	},
	tabBarIcon: (tabInfo) => {
		return (
		<FontAwesomeIcon
			icon={"face-awesome"}
		/>
		);
	},
	},
},

});

const Navigator = createAppContainer(TabNavigator);

export default function BottomTab() {
return (
	<Navigator>
	<HomeScreen />
	</Navigator>
);
}
