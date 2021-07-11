import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useSelector} from 'react-redux';

import Colors from './settings/Colors';
import Header from './components/Header';
import InputName from './components/Input';
import TableNames from './components/TableNames';
import IconSpin from './assets/icons/spin.svg';

const App = () => {
  const state = useSelector(state => state.users);
  const [nameSorted, setNameSorted] = useState('');
  const sort = () => {
    const index = Math.floor(Math.random() * (state.length - 1 + 1)) + 1;

    state.forEach(p =>
      p.id === index
        ? p.name != nameSorted
          ? setNameSorted(p.name)
          : sort()
        : false,
    );
    console.warn(nameSorted);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <InputName />
        <TableNames />
        <TouchableOpacity onPress={() => sort()} style={styles.button}>
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
