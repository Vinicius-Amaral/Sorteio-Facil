import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Input from './Input';

export default modalAdd = ({hideModal}) => {
  return (
    <View style={styles.container}>
      <Input hideModal={hideModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
