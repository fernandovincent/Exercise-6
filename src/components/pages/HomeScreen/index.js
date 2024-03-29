import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Button from '../../atoms/Button';
import Card from '../../molecules/Card';
import Axios from 'axios';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Fetch
    // fetch('https://reqres.in/api/users')
    //   .then(res => res.json())
    //   .then(json => setUsers(json.data));
    // Axios
    Axios.get('http://10.0.2.2:3004/users')
    .then(res => setUsers(res.data));
  }, [users]);

  const handleSubmit = () => {
    const data = {
      email: 'john@gmail.com',
      first_name: 'John',
      last_name: 'Doe',
      avatar: 'https://reqres.in/img/faces/10-image.jpg',
    };
    Axios.post('http://10.0.2.2:3004/users', data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.button}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button label="Tambah" onSubmit={handleSubmit} />
        {users.map(item => (
          <Card
            key={item.id}
            fullName={`${item.first_name} ${item.last_name}`}
            email={item.email}
            imageUrl={item.avatar}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

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
  card: {
    marginTop: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  },
});