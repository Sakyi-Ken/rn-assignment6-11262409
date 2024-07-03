import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './Header'
import Fashion from './Fashion'

export default function Shop() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Header'>
        <Stack.Screen name="Header" component={Header} />
        <Stack.screen name="Fashion" component={Fashion} />
      </Stack.Navigator>
      <View style={shopStyles.container}>
        <Header/>
        <Fashion/>
      </View>
    </NavigationContainer>
  );  
}

const shopStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
