import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import quizData from '../assets/quiz.json'

const QuizScreen = () => {
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const currQuestion = quizData[currentQuestionIndex];

  const handleAnswer = (option) => {
    setAnswers([...answers, option]); // store answers
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Navigate to the results screen or show the result
      console.log('Quiz Completed:', answers);
      // navigation.navigate('Results', { answers });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quiz</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 160,
  },
  header: {
    marginTop: 50,
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffd700',
    textAlign: 'center',
    flex: 1,
  },
})

export default QuizScreen;