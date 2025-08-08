import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Keyboard } from 'react-native';

export default function App() {
const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
const [guess, setGuess] = useState('');
const [feedback, setFeedback] = useState('');
const [guessCount, setGuessCount] = useState(0);

function generateRandomNumber(): number {
return Math.floor(Math.random() * 100) + 1;
}

const handleGuess = () => {
const userGuess = parseInt(guess);

if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
setFeedback('Please enter a number between 1 and 100.');
return;
}

setGuessCount(guessCount + 1);

if (userGuess < secretNumber) {
setFeedback('Too low! Try again.');
} else if (userGuess > secretNumber) {
setFeedback('Too high! Try again.');
} else {
setFeedback(`Congratulations! You guessed the correct number in ${guessCount + 1} attempts.`);
}

setGuess('');
Keyboard.dismiss();
};

const handleRestart = () => {
setSecretNumber(generateRandomNumber());
setGuess('');
setFeedback('');
setGuessCount(0);
};

return (
<View style={styles.container}>
<Text style={styles.title}>Mystery Number Challenge</Text>
<Text style={styles.instruction}>Enter a number between 1 and 100:</Text>

<TextInput
style={styles.input}
keyboardType="numeric"
placeholder="Enter your guess"
value={guess}
onChangeText={text => setGuess(text)}
/>

<TouchableHighlight style={styles.button} underlayColor="#7e6b54" onPress={handleGuess}>
<Text style={styles.buttonText}>Submit Guess</Text>
</TouchableHighlight>

<Text style={styles.feedback}>{feedback}</Text>
<Text style={styles.guessCount}>Guess Count: {guessCount}</Text>

<TouchableHighlight style={styles.restartButton} underlayColor="#6e7f80" onPress={handleRestart}>
<Text style={styles.buttonText}>Restart Game</Text>
</TouchableHighlight>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f8f4e3',
alignItems: 'center',
justifyContent: 'center',
padding: 20,
},
title: {
fontSize: 28,
marginBottom: 20,
fontWeight: 'bold',
color: '#5a4b3c',
},
instruction: {
fontSize: 18,
marginBottom: 10,
},
input: {
borderColor: '#b89b72',
borderWidth: 1,
borderRadius: 8,
width: '80%',
padding: 10,
marginBottom: 15,
backgroundColor: '#fff',
fontSize: 18,
textAlign: 'center',
},
button: {
backgroundColor: '#a67c52',
paddingVertical: 10,
paddingHorizontal: 25,
borderRadius: 8,
marginBottom: 20,
},
restartButton: {
backgroundColor: '#84999f',
paddingVertical: 10,
paddingHorizontal: 25,
borderRadius: 8,
marginTop: 20,
},
buttonText: {
color: '#fff',
fontSize: 18,
},
feedback: {
fontSize: 20,
marginVertical: 15,
textAlign: 'center',
color: '#444',
},
guessCount: {
fontSize: 16,
color: '#333',
},
});