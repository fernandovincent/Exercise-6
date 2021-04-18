import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import Axios from 'axios';

const App = () => {
  const [email, setEmail] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const handleSubmit = () => {
    const data = {
      email: email,
      first_name: firstName,
      last_name: lastName
    };
    Axios.post("http://10.0.2.2:3004/users", data).then(res => (res.data));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User</Text>
      <Gap height={40} />
      <TextInput value={email} label="Email" placeholder="Masukan email anda" onChangeText={e => setEmail(e)} />
      <Gap height={24} />
      <TextInput value={firstName} label="First Name" placeholder="Masukan first name anda" onChangeText={e => setfirstName(e)} />
      <Gap height={24} />
      <TextInput value={lastName} label="Last Name" placeholder="Masukan last name anda" onChangeText={e => setlastName(e)} />
      <Gap height={48} />
      <Button label="Save" onSubmit={() => handleSubmit()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
});

export default App;
