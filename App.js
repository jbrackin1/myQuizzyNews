import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import CountDownPage from './components/CountDownPage';
import HomePage from './components/Home';
// import PropTypes from 'prop-types';
// import CountDownCircleTimer from 'react-native-countdown-circle-timer';

export default function App() {


  return (
    <View style={styles.screenContainer}>
      <HomePage />
      <CountDownPage />

    </View>
   
    
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  topContainer: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  middleContainer: {
    flex: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  topTextPrimary: {
    fontFamily: 'KGHappy',
    fontSize: 46, 
    marginTop: 70
  },
  topTextSecondary: {
    fontFamily: 'Lexend',
    fontSize: 14, 
    marginLeft: -80,
  },
  middleText: {
    fontFamily: 'Lexend',
    fontSize: 14, 
    marginLeft: -270,
    marginTop: -40
  },
  playButton: {
    width: 350,
    marginTop: 10,
    backgroundColor: '#80C9FA',
    alignItems: 'center',
    borderRadius: 6,
    // shadowColor: '#53ADF0',
    // shadowOffset: { width: 0, height: 12 }
  },
  playButtonText: {
    fontFamily: 'Lexend',
    fontSize: 35,
    paddingVertical: 3,
    color: '#fff',
  },
  bottomText: {
    fontFamily: 'Lexend',
    fontSize: 12, 
    color: '#909090', 
    marginLeft: 40
  },
});
