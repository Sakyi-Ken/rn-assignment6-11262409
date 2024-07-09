import React from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const addItemToCart = async (itemId, imageSource) => {
  try {
    const existingCart = await AsyncStorage.getItem('cartItems');
    let newCart = Json.parse(existingCart);
    if (!newCart) {
      newCart = [];
    }
    newCart.push({itemId, imageSource });
    await AsyncStorage.setItem('cartItems', JSON.stringify(newCart));
  } catch (error) {
    console.log('Error adding item to cart', error);
  }
};

const fashionItems = [
  {id:'1a',image: require('../assets/dress1.png'), image2: require('../assets/add_circle.png') ,name: 'Office Wear', description:'reversible angora cardigan',price: '$120'},
  {id:'2b',image: require('../assets/dress2.png'), image2: require('../assets/add_circle.png'), name: 'Black', description: 'reversible angora cardigan', price: '$120'},
  {id:'3c', image: require('../assets/dress3.png'), image2: require('../assets/add_circle.png') ,name: 'Church Wear', description: 'reversible angora cardigan', price: '$120'},
  {id:'4d',image: require('../assets/dress4.png'),image2: require('../assets/add_circle.png') ,name: 'Lamerei', description: 'reversible angora cardigan', price: '$120'},
  {id:'5e',image: require('../assets/dress5.png'), image2: require('../assets/add_circle.png'),name: '21WN', description: 'reversible angora cardigan', price: '$120'},
  {id:'6f',image: require('../assets/dress6.png'), image2: require('../assets/add_circle.png'),name: 'Lopo', description: 'reversible angora cardigan', price: '$120'},
  {id:'7g',image: require('../assets/dress7.png'), image2: require('../assets/add_circle.png'),name: '21WN', description: 'reversible angora cardigan', price: '$120'},
  {id:'8h',image: require('../assets/dress3.png'), image2: require('../assets/add_circle.png'),name: 'lame', description: 'reversible angora cardigan', price: '$120'}
]

const Item = ({image, name, description, price, image2}) => (
    <View style={fashionStyles.fashionContainer}>
      <View style={fashionStyles.imageContainer}>
        <Image style={fashionStyles.image} source={image}/>
        <Image style={fashionStyles.image2} source={image2}/>
      </View>
      <View style={fashionStyles.details}>
        <Text style={fashionStyles.name}>{name}</Text>
        <Text style={fashionStyles.description}>{description}</Text>
        <Text style={fashionStyles.price}>{price}</Text>
      </View>
    </View>
)

export default function Fashion() {

  renderItem = ({item}) => (
    <Item image={item.image} name={item.name} description={item.description} price={item.price} image2={item.image2}/>
  );

  const numColumns = 2;

  return (
    <FlatList
      data={fashionItems}
      style={fashionStyles.fashion}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      key={numColumns}
      numColumns={numColumns}
    />
  )
} 

const fashionStyles = StyleSheet.create({
  fashion: {
    flex: 1,
    paddingHorizontal: 15,
    marginVertical: 50,
  },
  fashionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageContainer: {
    flexDirection: 'column',
  },
  image: {
    width:180,
    height: 250,
    resizeMode: 'cover',
  },
  image2: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
    marginTop: -40,
    marginLeft: 135,
  },
  name: {
    fontSize: 20,
    fontWeight: '100',
    marginTop: 20,
    fontFamily: 'serif',
  },
  description: {
    fontSize: 12.4,
    marginTop: 5,
    fontWeight: '100',
    color: '#333333',
  },
  price: {
    fontSize: 18,
    marginTop: 8,
    color: '#EE9972',
    fontWeight:'100',
  },
  details: {
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  }
})
