import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ProductCard from '../components/ProductCard';
import {fetchProductsByCategory} from '../api/productapi';

export default function ProductListScreen({route, navigation}) {
  const {category} = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({title: category});

    const loadProducts = async () => {
      try {
        const data = await fetchProductsByCategory(category);
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category, navigation]);

  const renderItem = ({item}) => (
    <ProductCard
      item={item}
      onPress={() => navigation.navigate('ProductDetail', {productId: item.id})}
    />
  );

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {products.length === 0 ? (
        <Text style={styles.noData}>No products found in {category}</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
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
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noData: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#555',
  },
});
