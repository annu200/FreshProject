import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CartItem({item, onRemove}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>

      <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Icon name="trash-outline" size={24} color="#E53935" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 10,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
});
