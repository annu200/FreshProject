import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {categories} from '../constants/Categories';

export default function BrowseScreen({navigation}) {
  const [search, setSearch] = useState('');

  const filteredCategories = categories.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate('ProductList', {category: item.title})
      }>
      <Text style={styles.itemText}>{item.title}</Text>
      <Image source={require('../assets/Images/rightarrow.png')}></Image>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#888"
      />
      <FlatList
        data={filteredCategories}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchInput: {
    height: 50,
    borderRadius: 12,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
  },
  list: {
    paddingBottom: 40,
  },
  item: {
    paddingVertical: 18,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 10,
  },
});
