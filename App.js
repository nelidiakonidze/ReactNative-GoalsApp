import React, {useState} from 'react';
import {
  StyleSheet,
  Button,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoal = goalTitle => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setIsAddMode(false);
  };
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };
  return (
    <ImageBackground
      source={require('./images/photo.jpg')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.screen}>
        <Button
          style={styles.titleFirst}
          title='Add new goal'
          onPress={() => setIsAddMode(true)}
        />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoal}
          onCancel={cancelGoalHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginVertical: 140,
  },
  titleFirst: {
    fontFamily: 'Cochin',
    fontSize: 20,
    color: 'red',
  },
});
