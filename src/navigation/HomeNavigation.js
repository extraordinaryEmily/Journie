import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'; // Adjust the import path based on your file structure
import QuizScreen from '../screens/QuizScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ChatScreen from '../screens/ChatScreen';

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeMenu">
      <HomeStack.Screen 
        name="HomeMenu" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
        name="Quiz" 
        component={QuizScreen} 
        options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
        name="Chat" 
        component={ChatScreen} 
        options={{ headerShown: false }} 
      />
      <HomeStack.Screen 
        name="History" 
        component={HistoryScreen} 
        options={{ headerShown: false }} 
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
