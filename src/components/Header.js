import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../settings/Colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sorteio Fácil</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#31525E',
    backgroundColor: Colors.blue,
  },
  text: {
    color: Colors.white,
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
});
