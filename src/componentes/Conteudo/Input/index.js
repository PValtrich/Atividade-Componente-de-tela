import React from "react";
import { StyleSheet, View, TextInput } from 'react-native';

export default function Input() {
  return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Digite Aqui..."
            />
        </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 150,
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  }
});
