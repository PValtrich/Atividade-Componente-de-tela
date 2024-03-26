import React from "react";
import { StyleSheet, View, Image } from 'react-native';

export default function Lupa() {
  return (
        <View>
            <Image
                source={require('../../../../assets/lupa.png')}
                style={styles.lupa}
            />
      </View>
  );
}

const styles = StyleSheet.create({
  lupa: {
    width: 50,
    height: 50,
  }
});
