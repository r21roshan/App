import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductItem = ({ product }) => {
  return (
    <View style={styles.item}>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ProductItem;



