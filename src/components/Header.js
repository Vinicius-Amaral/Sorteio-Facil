import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {useDispatch} from 'react-redux';
import {deleteAll, order} from '../redux/slices/userSlice';

import Colors from '../settings/Colors';
import IconDelete from '../assets/icons/delete.svg';
import IconArrow from '../assets/icons/arrow.png';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SORTEIO FÁCIL</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => dispatch(order())}>
          <Image
            source={IconArrow}
            style={{width: 30, height: 30, marginRight: 16}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(deleteAll())}>
          <IconDelete />
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
    backgroundColor: Colors.blue,
    borderBottomColor: '#31525E',
  },
  text: {
    fontSize: 22,
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
  },
});
