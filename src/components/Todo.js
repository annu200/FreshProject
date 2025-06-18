import react, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import api from '../api/api';

const Todo = () => {
  const [data, setdata] = useState([]);
  const tododata = async () => {
    try {
      let response = await api.post('/users', {
        name: 'titli',
        age: 24,
        weight: '87',
      });
      console.log('response---->', response.data);
      setdata([response.data.user]);
    } catch (error) {
      console.log('todo error--->', error);
    }
  };
  useEffect(() => {
    console.log('setData----->', data);
    tododata();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          marginTop: 90,
          backgroundColor: 'red',
        }}>
        <Text>Name: {item.name}</Text>
        <Text>Age: {item.age}</Text>
        <Text>Weight: {item.weight}</Text>
        <Text>Hello</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id?.toString() || index.toString()}
    />
  );
};
export default Todo;
