import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}

function MiddleBtn() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: "#6b728042",
        borderLeftWidth: 1,
        borderLeftColor: "#6b728042",
        paddingHorizontal: 40,
      }}
    >
      <View
        style={{
          position: "relative",
          height: 60,
          width: 60,
          bottom: 15,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2563EB",
          borderRadius: 20,
        }}
      >
        <Icon name="add" size={46} color="#F9FAFB" />;
      </View>
    </View>
  );
}

// Create Bottom Tabs
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#6B7280",
          tabBarInactiveTintColor: "#6B7280",
          tabBarStyle: {
            backgroundColor: "#D9D9D9",
            height: 105,
            paddingTop: 20,
          },
          tabBarItemStyle: {
            height: 100,
          },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              return <Icon name="home" size={29} color={color} />;
            }

            if (route.name === "Profile") {
              return <MiddleBtn />;
            }

            if (route.name === "Settings") {
              return <Icon name="settings" size={30} color={color} />;
            }
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    color: "#ff0707",
  },
});
