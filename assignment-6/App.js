import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import Shop from './components/Shop'
import CartBar from './components/CartBar'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Shop'>
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="CartBar" component={CartBar} />
      </Stack.Navigator>
      <View style={styles.container}>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
