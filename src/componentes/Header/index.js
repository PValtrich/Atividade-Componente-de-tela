import React from "react";
import { StyleSheet, View } from 'react-native';
import Circulo from "../Conteudo/Circulo";
import Input from "../Conteudo/Input";
import Lupa from "../Conteudo/Lupa";

export default function Header() {
  return (
            <View style={styles.header}>

            <Circulo></Circulo>
            <Input></Input>
            <Lupa></Lupa>

            </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: '15%',
    backgroundColor: '#ECA400',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 50,
  },
});
