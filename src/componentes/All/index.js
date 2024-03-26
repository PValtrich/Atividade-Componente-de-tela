import { StyleSheet, View } from 'react-native';
import Header from '../Header';


export default function All() {
  return (

        <View style={styles.all}>
            <Header></Header>
            <View style={styles.body}/>
        </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
}
});
