import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}>
        <TextInput
          placeholder='Course Goals'
          style={{width: '80%', borderColor: 'black', borderWidth: 1}}
        />
        <Button title='ADD' />
      </View>
      <View></View>
    </View>
  );
}
