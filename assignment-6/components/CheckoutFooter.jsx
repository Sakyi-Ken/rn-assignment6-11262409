import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

export default function CheckoutFooter() {
  <View style={checkoutStyles.checkoutContainer}>
    <Text style={checkoutStyles.checkoutText}>checkout</Text>
    <Image style={checkoutStyles.checkoutIcon} source={require("../assets/shoppingBag.png")}/>
  </View>
}

const checkoutStyles= StyleSheet.create({
  checkoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  checkoutText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '100',
  },
  checkoutIcon: {
    width: 30,
    height: 30,
  }
})
