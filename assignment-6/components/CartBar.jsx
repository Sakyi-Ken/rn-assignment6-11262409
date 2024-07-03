import React, { useContext, useState } from 'react';
import {View, StyleSheet, Image, Text, FlatList} from 'react-native';
import { CartContext } from './CardContext';

export default function CartBar() {
  const {cartItems, removeFromCart } = useContext(CartContext);

  return (
    <View style={cartStyles.cartContainer}>
      <View style={cartStyles.cart}>
        <Image style={cartStyles.cartLogo} source={require("../assets/Logo.png")}/>
        <Image style={cartStyles.searchIcon} source={require("../assets/Search.png")}/>
      </View>
      <View style={cartStyles.cartBar}>
        <Text style={cartStyles.cartText}>C H E C K O U T</Text>
        <View></View>
        <Text>🔶</Text>
        <View></View>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.image}} style={{ width: 100, height: 100}} />
            <Pressable onPress={() => removeFromCart(item.id)}>
              <Image source={require("../assets/remove.png")} style={{ width: 20, height: 20}} />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}