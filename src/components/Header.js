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
    height: 50,
    backgroundColor: Colors.blue,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
});
