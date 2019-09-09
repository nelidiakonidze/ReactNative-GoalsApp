import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={props.visible} animatedType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goals'
          style={styles.inputText}
          onChangeText={goalHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button title='Cancel' color='red' onPress={props.onCancel} />
          </View>
          <View>
            <Button title='ADD' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    margin: 80,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputText: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: '40%',
  },
});
export default GoalInput;
