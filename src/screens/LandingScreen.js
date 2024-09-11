import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/Button';
import script from '../assets/script.json'
import ChatScreen from './ChatScreen';
import QuizScreen from './QuizScreen';

const LandingScreen = ({ navigation }) => {
  const [firstTime, setFirstTime] = useState(true);
  const [motivationalText, setMotivationalText] = useState('');
  const { width, height } = Dimensions.get('window');

  useEffect(() => {
    checkFirstTime();
    loadMotivationalText();
  }, []);

  const checkFirstTime = async () => {
    try {
      const firstTimeStatus = await AsyncStorage.getItem('firstTime');
      if (firstTimeStatus !== null) {
        setFirstTime(false);
      } else {
        await AsyncStorage.setItem('firstTime', 'false');
      }
    } catch (error) {
      console.error('ERROR 001:', error);
    }
  }

  const loadMotivationalText = async () => {
    try {
      const lines = script.messages;
      const randomLine = lines[Math.floor(Math.random() * lines.length)];
      setMotivationalText(randomLine);
    } catch (error) {
      console.error('ERROR 002:', error);
    }
  };

  const MotivationalText = () => {
    if (!firstTime) {
      return <Text>{motivationalText}</Text>;
    } else {
      return (
        <Text>
          Start your <Text style={styles.journieText}>Journie</Text> with us today! {'\n\n'}
          Writing down your thoughts can be a powerful release 🔥
        </Text>
      );
    }
  };

    console.log("Landing Screen Open");
    return (
      <View style={styles.container}>
        <Text style={[styles.header, { width: width * 0.55 }]}>{firstTime ? 'Welcome!' : 'Welcome Back!'}</Text>
        <Text style={[styles.motivationalText, { width: width * 0.55 }]}><MotivationalText /></Text>
        <Button
          text="Let's Talk!"
          fontSize={18}
          widthRatio={0.4}
          yPosition ={height * 0.625}
          onPress={() => navigation.navigate('HomeNavigation')}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 10,
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#F5E260',
      marginBottom: 5,
    },
    motivationalText: {
      fontSize: 20,
      textAlign: 'left',
      color: '#334E68',
      marginBottom: 100,
    },
    journieText: {
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    tabBar: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

  export default LandingScreen;
