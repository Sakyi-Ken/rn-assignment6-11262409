import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './Header'
import Fashion from './Fashion'

export default function Shop() {
  return (
    <View style={shopStyles.container}>
      <Header/>
      <Fashion/>
    </View>
  );
}

const shopStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
