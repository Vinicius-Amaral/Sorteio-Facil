import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';

import Colors from './settings/Colors';
import Header from './components/Header';
import ModalAdd from './components/modalAdd';
import InputName from './components/Input';
import TableNames from './components/TableNames';
import IconAdd from './assets/icons/add.svg';

const App = () => {
  const state = useSelector(state => state.users);
  const [modalVisible, setModalVisible] = useState(false);
  const [nameSorted, setNameSorted] = useState('');
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

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
        <TableNames />
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.button}>
          <IconAdd />
        </TouchableOpacity>
        <Modal
          animationIn="fadeInUpBig"
          animationOut="fadeOutDownBig"
          animationInTiming={1700}
          animationOutTiming={1700}
          onBackdropPress={() => setModalVisible(!modalVisible)}
          isVisible={modalVisible}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ModalAdd />
        </Modal>
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
