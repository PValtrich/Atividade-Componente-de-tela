import React from "react";
import { StyleSheet, View, Image } from 'react-native';

export default function Circulo(){
    return(
        <View>
            <Image
                source={require('../../../../assets/EU.png')}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
      width: 75,
      height: 75,
      borderRadius: 100,
    }
  });