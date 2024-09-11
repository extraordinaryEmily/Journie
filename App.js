// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './src/screens/LandingScreen';
import ChatScreen from './src/screens/ChatScreen';
import QuizScreen from './src/screens/QuizScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import HomeNavigation from './src/navigation/HomeNavigation';


const Stack = createStackNavigator();

export default function App() {
  console.log("App Open");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}