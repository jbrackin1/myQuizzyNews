import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import CountDownPage from './components/CountDownPage';
import HomePage from './components/Home';
import Navigator from './routes/homeStack'; 

// import CountDownCircleTimer from 'react-native-countdown-circle-timer';

export default function App() {

  return (
  //   <View>
  //  <HomePage />
  //  <View><CountDownPage/></View>
  //   </View>
  <Navigator />

  );
}

const styles = StyleSheet.create({

 
});
