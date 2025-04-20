import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image source={product.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.sub}>{product.sub}</Text>
      <View style={styles.row}>
        <Text style={styles.price}>${product.price}</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Icon name="add" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 80,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  sub: {
    color: 'gray',
    fontSize: 12,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
  },
  addBtn: {
    backgroundColor: '#00AA6C',
    borderRadius: 20,
    padding: 5,
  },
});
