import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import Colors from './settings/Colors';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <StatusBar backgroundColor={Colors.blue} barStyle="light-content" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
