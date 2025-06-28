// src/screens/CartScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from '../redux/slices/cartSlice';

export default function CartScreen() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={<Text>Your cart is empty</Text>}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  onPress={() => dispatch(decreaseQuantity(item.id))}>
                  <Text style={styles.qtyBtn}>−</Text>
                </TouchableOpacity>
                <Text>{item.quantity}</Text>
                <TouchableOpacity
                  onPress={() => dispatch(increaseQuantity(item.id))}>
                  <Text style={styles.qtyBtn}>＋</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
              <Text style={{fontSize: 20}}>⋮</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.summary}>
        <Text style={styles.total}>Total: ${total}</Text>
        <Button title="Checkout" onPress={() => dispatch(clearCart())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {width: 60, height: 60, marginRight: 12, resizeMode: 'contain'},
  info: {flex: 1},
  title: {fontSize: 14, fontWeight: '600'},
  price: {fontSize: 14, color: '#E53935', marginTop: 4},
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 8,
  },
  qtyBtn: {
    fontSize: 18,
    width: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  summary: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 16,
    alignItems: 'center',
  },
  total: {fontSize: 18, fontWeight: '700', marginBottom: 10},
});
