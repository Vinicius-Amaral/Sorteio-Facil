import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {useDispatch} from 'react-redux';
import {deleteAll} from '../redux/slices/userSlice';

import Colors from '../settings/Colors';
import IconDelete from '../assets/icons/delete.svg';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SORTEIO FÁCIL</Text>
      <TouchableOpacity onPress={() => dispatch(deleteAll())}>
        <IconDelete />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 3,
    paddingHorizontal: 16,
    backgroundColor: Colors.blue,
    borderBottomColor: '#31525E',
  },
  text: {
    fontSize: 22,
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
  },
});
