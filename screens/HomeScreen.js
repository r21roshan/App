import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Button, Image } from 'react-native';

const HomeScreen = () => {
  // Example products data
  const products = [
    { id: '1', name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/100' },
    // Add more products here
  ];

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search products..." />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <Button title="Add to Cart" onPress={() => {}} />
          </View>
        )}
        numColumns={2} // Adjust based on your design
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  productCard: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
});

export default HomeScreen;





