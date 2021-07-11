import React from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Colors from './settings/Colors';
import Header from './components/Header';
import InputName from './components/Input';
import TableNames from './components/TableNames';
import IconSpin from './assets/icons/spin.svg';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <InputName />
        <TableNames />
        <TouchableOpacity style={styles.button}>
          <IconSpin />
        </TouchableOpacity>
      </SafeAreaView>
      <StatusBar backgroundColor={Colors.blue} barStyle="light-content" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.whiteCultured,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
});
