import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

export default function Header() {
  return (
    <View style={headerStyles.headerContainer}>
      <View style={headerStyles.header}>
        <Image style={headerStyles.menuIcon} source={require("../assets/Menu.png")}/>
        <Image style={headerStyles.fashionLogo} source={require("../assets/Logo.png")}/>
        <View style={headerStyles.searchContainer}>
          <Image style={headerStyles.searchIcon} source={require("../assets/Search.png")}
          />
          <Image style={headerStyles.shopBag} source={require("../assets/shoppingBag.png")}
          />
        </View>
      </View>
      <View style={headerStyles.navBar}>
        <Text style={headerStyles.headerText}>OUR STORY</Text>
        <View style={headerStyles.navTabs}>
          <Pressable style={headerStyles.listViewContainer}>
            <Image style={headerStyles.listView} source={require('../assets/Listview.png')}
            />
          </Pressable>
          
          <Pressable style={headerStyles.filterContainer}>
            <Image style={headerStyles.filterTab} source={require('../assets/Filter.png')}
            />
          </Pressable>
          
        </View>
      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    paddingHorizontal:25,
    paddingVertical: 30,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchContainer: {
    flexDirection: 'row' 
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    alignItems: 'center'
  },
  navTabs: {
    flexDirection: 'row',
  },
  menu: {
    resizeMode: 'cover',
    width: 35,
    height: 35,
  },
  fashionLogo: {
    resizeMode: 'contain',
    width: 130,
    height: 50,
  },
  searchIcon: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    marginRight: 20,
  },
  shopBag: {
    resizeMode:'contain',
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '300',
    letterSpacing: 3,
    fontFamily:'serif',
  },
  listView: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  filterTab: {
    resizeMode: 'contain',
    width: 32,
    height: 30,
    alignSelf: 'center',
  },
  listViewContainer: {
    backgroundColor: '#EDEFEE',
    borderRadius: 30,
    padding: 10,
  },
  filterContainer: {
    backgroundColor: '#EDEFEE',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginLeft: 20,
  }

})