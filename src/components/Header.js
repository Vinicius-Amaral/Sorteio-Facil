import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {useDispatch} from 'react-redux';
import {deleteAll, order} from '../redux/slices/userSlice';

import Colors from '../settings/Colors';
import IconDelete from '../assets/icons/delete.svg';
import IconArrow from '../assets/icons/arrow.svg';
import IconAdd from '../assets/icons/add.svg';

const Header = ({showModal}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SORTEIO FÁCIL</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => dispatch(order())}>
          <IconArrow style={{marginRight: 20}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(deleteAll())}
          style={{marginRight: 16}}>
          <IconDelete />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showModal()} style={styles.buttonAdd}>
          <IconAdd />
        </TouchableOpacity>
      </View>
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
    paddingVertical: 8,
    backgroundColor: Colors.blue,
    borderBottomColor: '#31525E',
  },
  text: {
    fontSize: 22,
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
  },
});
