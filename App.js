import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Login from './screens/Login';
import CarpoolHomeScreen from './screens/CarpoolHomeScreen';
import CarpoolScreenList from './screens/CarpoolScreenList';
import ProfileScreen from './screens/ProfileScreen';
import GPSandMapComponent from './components/GPSandMapComponent';

// Stack and Tab Navigator
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack for Carpool screens inside the Carpool tab
function CarpoolStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CarpoolHomeScreen" component={CarpoolHomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CarpoolScreenList" component={CarpoolScreenList} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Stack for the Map screen
function MapStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={GPSandMapComponent} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Main Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Carpool') {
            iconName = focused ? 'car-sport' : 'car-sport-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Carpool" component={CarpoolStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Map" component={MapStackNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}