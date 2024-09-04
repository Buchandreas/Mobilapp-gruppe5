import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Login from './screens/Login'; // Ensure this is the correct path
import HomeScreen from './screens/HomeScreen';
import CarpoolHomeScreen from './screens/CarpoolHomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import GPSandMapComponent from './components/GPSandMapComponent';
import CameraComponent from './components/CameraComponent';
import CarpoolScreenList from './screens/CarpoolScreenList';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={GPSandMapComponent} options={{ headerShown: false }} />
      <Stack.Screen name="Cat" component={CameraComponent} />
    </Stack.Navigator>
  );
}

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
      <Tab.Screen name="Carpool" component={CarpoolHomeScreen} />
      <Tab.Screen name="Map" component={StackNavigator} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="CarpoolScreenList" component={CarpoolScreenList} />
        <Stack.Screen name="CarpoolHomeScreen" component={CarpoolHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}