import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../settings/Colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SORTEIO FÁCIL</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 3,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: Colors.blue,
    borderBottomColor: '#31525E',
  },
  text: {
    fontSize: 22,
    color: Colors.white,
    fontFamily: 'Poppins-Bold',
  },
});
