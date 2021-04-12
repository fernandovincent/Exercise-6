import React, { useState } from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Gap from '../../atoms/Gap';
import Button from '../../atoms/Button';

const HomeScreen = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     //Fetch
//     // fetch('https://reqres.in/api/users')
//     //   .then(res => res.json())
//     //   .then(json => setUsers(json.data));
//     // Axios
//     // Axios.get('https://reqres.in/api/users')
//     // .then(res => setUsers(res.data.data),
//     // );
//   }, []);

      const [name, setName] = useState("");
      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [address, setAddress] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");

      const handleSubmit = () => {
        const data = {
          name: name,
          username: username,
          email: email,
          address: address,
          phoneNumber: phoneNumber,
    };
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Registration</Text>
        <Gap height={40} />
        <TextInput label="Name" placeholder="Masukan nama lengkap anda" value={name} onChangeText={e => setName(e)} />
        <Gap height={20} />
        <TextInput label="Username" placeholder="Masukan username anda" value={username} onChangeText={e => setUsername(e)} />
        <Gap height={20} />
        <TextInput label="Email" placeholder="Masukan nama email anda" value={email} onChangeText={e => setEmail(e)} />
        <Gap height={20} />
        <TextInput label="Address" placeholder="Masukan alamat anda" value={address} onChangeText={e => setAddress(e)} />
        <Gap height={20} />
        <TextInput label="Phone Number" placeholder="Masukan nomor telepon anda" keyboardType='number-pad' value={phoneNumber} onChangeText={e => setPhoneNumber(e)} />
        <Gap height={29} />
        <Button label="Register" onSubmit={handleSubmit} />
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
});