import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';

const SettingsScreen = () => {
  return (
    <View>
        <Text>This is the Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    tabBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

export default SettingsScreen;