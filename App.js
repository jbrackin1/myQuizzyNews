import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import CountDownPage from './components/CountDownPage';
import HomePage from './components/Home';
// import PropTypes from 'prop-types';
// import CountDownCircleTimer from 'react-native-countdown-circle-timer';

export default function App() {


  return (
    // <View style={styles.screenContainer}>
      <HomePage style={styles.screenContainer}/>

    
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
 
});
