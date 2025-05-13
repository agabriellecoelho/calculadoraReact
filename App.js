#!/usr/bin/env node

/**
 * This script is used to reset the project to a blank state.
 * It deletes or moves the /app, /components, /hooks, /scripts, and /constants directories to /app-example based on user input and creates a new /app directory with an index.tsx and _layout.tsx file.
 * You can remove the `reset-project` script from package.json and safely delete this file after running it.
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setExpression((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(expression).toString());
    } catch (e) {
      setResult('Erro');
    }
  };

  const clear = () => {
    setExpression('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Expressão"
        value={expression}
        mode="outlined"
        editable={false}
        style={styles.input}
      />
      <Text style={styles.result}>Resultado: {result}</Text>
      <View style={styles.buttonRow}>
        {['1', '2', '3', '+'].map((val) => (
          <Button key={val} mode="contained" onPress={() => handlePress(val)}>{val}</Button>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {['4', '5', '6', '-'].map((val) => (
          <Button key={val} mode="contained" onPress={() => handlePress(val)}>{val}</Button>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {['7', '8', '9', '*'].map((val) => (
          <Button key={val} mode="contained" onPress={() => handlePress(val)}>{val}</Button>
        ))}
      </View>
      <View style={styles.buttonRow}>
        {['0', '.', '=', '/'].map((val) => (
          <Button key={val} mode="contained" onPress={val === '=' ? calculate : () => handlePress(val)}>{val}</Button>
        ))}
      </View>
      <Button mode="contained" onPress={clear} style={styles.clearButton}>Limpar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  result: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  clearButton: {
    marginTop: 10,
  },
});

