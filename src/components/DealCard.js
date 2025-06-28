import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DealCard = ({item}) => {
  return (
    <View style={styles.card}>
      {/* Image */}
      <Image source={{uri: item.image}} style={styles.image} />

      {/* Heart Icon */}
      <TouchableOpacity style={styles.heartIcon}>
        <Icon name="heart-outline" size={20} color="#000" />
      </TouchableOpacity>

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.category}>Microphones</Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>${item.discountPrice}</Text>
          <Text style={styles.oldPrice}>${item.originalPrice}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    marginHorizontal: 10,
    padding: 12,
    position: 'relative',
    width: 340,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#f4f4f4',
    padding: 6,
    borderRadius: 20,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  category: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C90000',
    marginRight: 8,
  },
  oldPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  desc: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});

export default DealCard;
