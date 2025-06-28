import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  fetchAllProducts,
  fetchProductsByCategory,
  fetchRecommendedProducts,
} from '../api/productapi';

const screenWidth = Dimensions.get('window').width;
const BANNER_IMAGE =
  'https://images.unsplash.com/photo-1606813909227-bc70e8104e47?auto=format&fit=crop&w=800&q=80';

const featuredDeals = [
  {
    id: 1,
    title: 'RØDE PodMic',
    description: 'Dynamic microphone, Speaker microphone',
    discountPrice: 108.2,
    originalPrice: 199.99,
    image: 'https://www.pngmart.com/files/15/Microphone-PNG-Transparent.png',
  },
];

const topTabs = [
  {title: 'All', apiKey: 'all'},
  {title: 'Audio', apiKey: 'smartphones'},
  {title: 'Video', apiKey: 'laptops'},
  {title: 'Photography', apiKey: 'lighting'},
  {title: 'Gaming', apiKey: 'groceries'},
];

export default function HomeScreen({navigation}) {
  const [selectedTab, setSelectedTab] = useState('all');
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      let data =
        selectedTab === 'all'
          ? await fetchAllProducts()
          : await fetchProductsByCategory(selectedTab);
      setRecommendedProducts(data.products || data);
    } catch (e) {
      console.log('Error fetching products', e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedTab]);

  useEffect(() => {
    const loadRecommended = async () => {
      try {
        const data = await fetchRecommendedProducts();
        console.log('Recommended:', data);
      } catch (err) {
        console.log('Recommended error:', err);
      }
    };
    loadRecommended();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hello Michael</Text>

      <FlatList
        horizontal
        data={topTabs}
        keyExtractor={item => item.apiKey}
        showsHorizontalScrollIndicator={false}
        style={{marginBottom: 10}}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setSelectedTab(item.apiKey)}
            style={[
              styles.tabButton,
              selectedTab === item.apiKey && styles.tabActive,
            ]}>
            <Text
              style={[
                styles.tabText,
                selectedTab === item.apiKey && styles.tabTextActive,
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Deals of the Day</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bannerContainer}>
          <Image source={{uri: BANNER_IMAGE}} style={styles.bannerImage} />
        </View>

        <FlatList
          horizontal
          data={featuredDeals}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.dealCard}>
              <Image source={{uri: item.image}} style={styles.dealImage} />
              <TouchableOpacity style={styles.heartIcon}>
                <Icon name="heart-outline" size={18} color="#000" />
              </TouchableOpacity>
              <View style={styles.dealInfo}>
                <Text style={styles.categoryLabel}>Microphones</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>${item.discountPrice}</Text>
                  <Text style={styles.oldPrice}>${item.originalPrice}</Text>
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.description}</Text>
              </View>
            </View>
          )}
          contentContainerStyle={{paddingVertical: 10}}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.sectionTitle}>Recommended for You</Text>
        </View>

        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={recommendedProducts}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetail', {productId: item.id})
                }
                style={styles.recommendedCard}>
                <Image
                  source={{uri: item.thumbnail || item.image}}
                  style={styles.recommendedImage}
                />
                <Text style={styles.recommendedTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.recommendedPrice}>${item.price}</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingHorizontal: 16},
  greeting: {fontSize: 22, fontWeight: '600', marginVertical: 16},
  section: {marginBottom: 20},
  sectionTitle: {fontSize: 18, fontWeight: '600'},
  seeAll: {fontSize: 14, color: '#888'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  bannerContainer: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 10,
  },
  bannerImage: {width: '100%', height: '100%'},
  tabButton: {
    marginRight: 12,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#f2f2f2',
  },
  tabActive: {backgroundColor: '#000'},
  tabText: {color: '#555', fontWeight: '500'},
  tabTextActive: {color: '#fff'},
  dealCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    width: screenWidth - 40,
    marginHorizontal: 10,
    padding: 12,
    elevation: 2,
    position: 'relative',
  },
  dealImage: {width: 100, height: 100, borderRadius: 12},
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 5,
  },
  dealInfo: {flex: 1, marginLeft: 12, justifyContent: 'center'},
  categoryLabel: {fontSize: 12, color: '#888'},
  priceRow: {flexDirection: 'row', alignItems: 'center'},
  price: {fontSize: 16, fontWeight: 'bold', color: '#C90000', marginRight: 8},
  oldPrice: {fontSize: 14, color: '#999', textDecorationLine: 'line-through'},
  title: {fontSize: 14, fontWeight: '600', marginTop: 4},
  desc: {fontSize: 12, color: '#999', marginTop: 2},
  recommendedCard: {width: 140, marginRight: 12},
  recommendedImage: {width: '100%', height: 120, borderRadius: 10},
  recommendedTitle: {marginTop: 6, fontSize: 14, fontWeight: '500'},
  recommendedPrice: {fontSize: 14, fontWeight: 'bold', color: '#C90000'},
});
