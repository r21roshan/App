import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen.js';
import AccountScreen from './screens/AccountScreen';
import CartScreen from './screens/CartScreen';
import VendorScreen from './screens/VendorScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => (
          <View style={styles.drawerContent}>
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
            </DrawerContentScrollView>
          </View>
        )}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
        <Drawer.Screen name="Account" component={AccountScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Vendor" component={VendorScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 20,
  },
});








