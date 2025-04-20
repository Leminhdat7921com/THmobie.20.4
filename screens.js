import React from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: '1',
    title: 'Egg Chicken Red',
    sub: '4pcs, Price',
    price: '1.99',
    image: require('../assets/egg_red.png'), // Thay bằng hình của bạn
  },
  {
    id: '2',
    title: 'Egg Chicken White',
    sub: '180g, Price',
    price: '1.50',
    image: require('../assets/egg_white.png'),
  },
  {
    id: '3',
    title: 'Egg Pasta',
    sub: '30gm, Price',
    price: '15.99',
    image: require('../assets/pasta.png'),
  },
  {
    id: '4',
    title: 'Egg Noodles',
    sub: '2L, Price',
    price: '15.99',
    image: require('../assets/noodles.png'),
  },
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} color="gray" />
        <TextInput
          placeholder="Egg"
          style={styles.input}
        />
        <Icon name="options-outline" size={20} color="gray" />
      </View>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#F2F3F2',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 16,
    height: 40,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
});
