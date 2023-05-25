import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function GamePage(){
  return (
    <View style={styles.screenContainer}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.answerButton}>
          <Text style={styles.answerText}>Something</Text>
        </Pressable>
        <Pressable style={styles.answerButton}>
          <Text style={styles.answerText}>Something2</Text>
        </Pressable>
        <Pressable style={styles.answerButton}>
          <Text style={styles.answerText}>Something</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#DED1E4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20, // Add margin to create space between buttons
  },
  answerButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    width: 335,
    height: 95,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10, // Add margin bottom to create space between buttons
  },
  answerText: {
    fontSize: 22,
    fontFamily: 'futura',
    textAlign: 'center',
  },
});
