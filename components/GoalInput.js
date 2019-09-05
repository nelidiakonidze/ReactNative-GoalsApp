import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder='Course Goals'
        style={styles.inputText}
        onChangeText={goalHandler}
        value={enteredGoal}
      />
      <Button title='ADD' onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  inputText: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
  },
});
export default GoalInput;
