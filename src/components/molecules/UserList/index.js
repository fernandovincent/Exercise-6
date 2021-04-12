import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserList = ({name, userName, email, address, phone}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.input}>
        Nama:<Text style={styles.text}> {name}</Text>
      </Text>
      <Text style={styles.input}>
        Username:<Text style={styles.text}> {userName}</Text>
      </Text>
      <Text style={styles.input}>
        Email:<Text style={styles.text}> {email}</Text>
      </Text>
      <Text style={styles.input}>
        Address:<Text style={styles.text}> {address}</Text>
      </Text>
      <Text style={styles.input}>
        Phone:<Text style={styles.text}> {phone}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#C5C5C5',
    marginTop: 31,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 26,
    paddingBottom: 11,
    paddingTop: 13,
  },
  input: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
  },
});

export default UserList;