/*// NavigationBar.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import LandingScreen from '../screens/LandingScreen';
import ChatScreen from '../screens/ChatScreen';
import QuizScreen from '../screens/QuizScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

const TabBarIcon = ({ name, color }) => {
  switch (name) {
    case 'Rocket':
      return <FontAwesome5 name="rocket" size={24} color={color} />;
    case 'Feather':
      return <Feather name="feather" size={24} color={color} />;
    case 'Profile':
      return <FontAwesome5 name="user-circle" size={24} color={color} />;
    default:
      return null;
  }
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const tabWidth = width / state.routes.length;
  const translateX = Animated.divide(state.index, state.routes.length).interpolate({
    inputRange: [0, 1],
    outputRange: [0, tabWidth],
  });

  return (
    <View style={styles.tabBar}>
      <Animated.View style={[styles.slider, { width: tabWidth, transform: [{ translateX }] }]} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const color = isFocused ? '#fff' : '#222';
        const icon = options.tabBarIcon ? options.tabBarIcon : { name: route.name, color: color };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
            key={index}
          >
            <TabBarIcon name={icon.name} color={icon.color} />
            <Text style={{ color }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const NavigationBar = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Quiz" component={QuizScreen} options={{ tabBarLabel: 'Quiz', tabBarIcon: { name: 'Rocket' } }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ tabBarLabel: 'Chat', tabBarIcon: { name: 'Feather' } }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ tabBarLabel: 'Settings', tabBarIcon: { name: 'Profile' } }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#FFD700',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    position: 'absolute',
    height: 60,
    backgroundColor: '#FFC107',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default NavigationBar;*/