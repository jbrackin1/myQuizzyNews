import { useEffect } from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { View, Text, StyleSheet } from 'react-native';

export default function CountDownPage({ navigation }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('GamePage');
    }, 3000);

    // Clean up the timeout when the component is unmounted or the effect is re-run
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.timer}>
      <CountdownCircleTimer
        isPlaying
        duration={7}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
      >
        {({ remainingTime }) => <Text>{remainingTime}</Text>}
      </CountdownCircleTimer>
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    backgroundColor: '#DED1E4',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
