import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const index = ({label, onSubmit}) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C238CE',
    paddingVertical: 15,
    borderRadius: 10,
  },
  labelButton: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
});