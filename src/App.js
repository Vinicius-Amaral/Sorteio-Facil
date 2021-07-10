import React from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';

import Colors from './settings/Colors';
import Header from './components/Header';
import InputName from './components/Input';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <InputName />
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
});
