import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import ChatScreen from '../screens/ChatScreen';
import QuizScreen from '../screens/QuizScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NavigationBar = () => (
  <Tab.Navigator initialRouteName="Chat">
    <Tab.Screen name="Quiz" component={QuizScreen} />
    <Tab.Screen name="Chat" component={ChatScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default NavigationBar;