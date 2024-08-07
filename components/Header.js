import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={styles.menu}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Jog</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cart}>🛒</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#131921',
    alignItems: 'center',
  },
  menu: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  cart: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Header;


