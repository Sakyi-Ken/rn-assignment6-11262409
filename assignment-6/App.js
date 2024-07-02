import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Shop from './components/Shop'

export default function App() {
  return (
    <View style={styles.container}>
      <Shop/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
