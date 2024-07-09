import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default function CartBar() {
  return (
    <View style={cartStyles.cartContainer}>
      <View style={cartStyles.cart}>
        <Image style={cartStyles.cartLogo} source={require("../assets/Logo.png")}/>
        <Image style={cartStyles.searchIcon} source={require("../assets/Search.png")}/>
      </View>
      <View style={cartStyles.cartBar}>
        <Text style={cartStyles.cartText}>C H E C K O U T</Text>
        <View style={cartStyles.line}></View>
        <Text>🔶</Text>
        <View style={cartStyles.line}></View>
      </View>
    </View>
  );
}

const cartStyles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    marginVertical : 50,
    marginHorizontal: 50,
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  line: {
    width: 5,
    backgroundColor: 'black',
  },
  cartText: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})