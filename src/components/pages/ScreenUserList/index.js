import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import UserList from '../../molecules/UserList';
import Axios from 'axios';

const ScreenUserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
    // Axios
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data),
    );
  }, []);

  console.log(users);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>User List</Text>
        {users.map(item => (
            <UserList 
            key={item.id}
            fullName={item.name}
            userName={item.username}
            email={item.email}
            address={`${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}
            phone={item.phone}
          />  
        ))}
      </ScrollView>
  </View>
  );
};

export default ScreenUserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
});
