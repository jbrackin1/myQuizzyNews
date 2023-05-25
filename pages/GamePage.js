import { View, Text, StyleSheet, Pressable } from 'react-native';

{/* <View style={styles.middleContainer}>
<Text style={styles.middleText}>Ready?</Text>
<Pressable style={styles.playButton} onPress={pressHandler}>
<Text style={styles.playButtonText}>PLAY</Text>
</Pressable>        
</View> */}

export default function GamePage(){
    return (
        <View style={styles.screenContainer}>
            <View >            <Pressable style={styles.answerButton}>
            <Text style={styles.answerText}>Something</Text></Pressable>
            <Pressable style={styles.answerButton}>
            <Text style={styles.answerText}>Something2</Text></Pressable>
            <Pressable style={styles.answerButton}>
            <Text style={styles.answerText}>Something</Text></Pressable>
            </View>

            {/* <Pressable style={styles.answerButton}>Something</Pressable>
            <Pressable style={styles.answerButton}>Something</Pressable> */}
           
        </View>
            
    )
}

const styles = StyleSheet.create({
    screenContainer: {
      backgroundColor: '#DED1E4',
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    answerButton: {
        display: 'flex',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        width: '335px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    answerText: {
        fontSize: '22px', 
        fontFamily: 'futura', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '335px', 
        height: '95px',
        topMargin: '33px', 
        radius:'10px',
    }
  });