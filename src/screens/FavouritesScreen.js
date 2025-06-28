import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useFavorites} from '../context/FavoritesContext';
import ProductCard from '../components/ProductCard';

export default function FavouritesScreen({navigation}) {
  const {favorites} = useFavorites();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.empty}>You haven't added any favorites yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ProductCard
              item={item}
              onPress={() =>
                navigation.navigate('ProductDetail', {productId: item.id})
              }
            />
          )}
          numColumns={2}
          contentContainerStyle={{paddingBottom: 20}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  empty: {
    marginTop: 60,
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
  },
});
