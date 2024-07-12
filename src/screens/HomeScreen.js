import { StyleSheet, View } from 'react-native';
import ChatButton from '../components/ChatButton';
import QuizButton from '../components/QuizButton';
import SettingsButton from '../components/SettingsButton';
import HistoryButton from '../components/HistoryButton';

const HomeScreen = ({ navigation }) => {
    console.log("Home Open");
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
          <ChatButton 
            onPress={() => navigation.navigate('Chat')} 
            style={styles.button}/>
          <View style={styles.minimenu}>
            <HistoryButton
                onPress={() => navigation.navigate('History')}
                style={styles.button}/>
            <QuizButton
                onPress={() => navigation.navigate('Quiz')} 
                style={styles.button}/>
          </View>
          <SettingsButton
            onPress={() => navigation.navigate('Settings')} 
            style={styles.button}/>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4%',
  },
  minimenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: '3%',
  },
  button: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;