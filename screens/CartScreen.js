import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const CartScreen = () => {
  const cartItems = [
    { id: '1', name: 'Product 1', price: '$10' },
    // Add more items here
  ];

  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0).toFixed(2);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.totalPrice}>Total: ${totalPrice}</Text>
        <Button title="Checkout" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    color: '#888',
  },
  footer: {
    marginTop: 20,
    padding: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CartScreen;







