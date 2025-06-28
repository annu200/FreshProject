import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const user = {
  name: 'Michael John',
  email: 'michael@example.com',
  avatar: 'https://i.pravatar.cc/150?img=12',
};

const menuItems = [
  {
    id: '1',
    label: 'My Orders',
    icon: 'receipt-outline',
    onPress: () => Alert.alert('My Orders'),
  },
  {
    id: '2',
    label: 'Help & Support',
    icon: 'help-circle-outline',
    onPress: () => Alert.alert('Support'),
  },
  {
    id: '3',
    label: 'Logout',
    icon: 'log-out-outline',
    onPress: () => Alert.alert('Logged out'),
  },
];

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{uri: user.avatar}} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.menuItem} onPress={item.onPress}>
            <Icon
              name={item.icon}
              size={22}
              color="#333"
              style={{marginRight: 16}}
            />
            <Text style={styles.menuText}>{item.label}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{paddingTop: 16}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
});
