import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartList() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await AsyncStorage.getItem('cartItems');
      if (items) {
        setCartItems(JSON.parse(items));
      }
    };

    fetchCartItems();
  }, []);

  const removeItemFromCart = async (itemId) => {
    const updatedCart = cartItems.filter(item => item.itemId !== itemId);
    await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <View style={cartStyles.cartContainer}>
      {cartItems.map((item, index) => (
        <View key={index} style={cartStyles.cartItem}>
          <Image style={cartStyles.itemImage} source={require(item.imageSource)}/>
          <TouchableOpacity onPress={() => removeItemFromCart(item.itemId)}>
            <Image style={cartStyles.cancelIcon} source={require("../assets/Cancel.png")}/>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const cartStyles = StyleSheet.create({
  // Add your styles here
  cartContainer: {
    // Style for the container
  },
  cartItem: {
    // Style for each cart item
  },
  itemImage: {
    // Style for the item image
  },
  cancelIcon: {
    // Style for the cancel icon
  },
});