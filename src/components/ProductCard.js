import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function ProductCard({item, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    margin: 8,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
