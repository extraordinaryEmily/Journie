import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingScreen from './src/screens/LandingScreen';
import ChatScreen from './src/screens/ChatScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  console.log("App Open");
  return (
    <NavigationContainer>
      <LandingScreen/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});