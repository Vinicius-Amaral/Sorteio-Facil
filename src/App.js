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

const App = () => {
  const state = useSelector(state => state.users);
  const [modalVisible, setModalVisible] = useState(false);
  const [nameSorted, setNameSorted] = useState('');
  const showModal = () => {
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
        <Header showModal={showModal} />
        <TableNames />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>SORTEAR</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationIn="zoomIn"
          animationOut="zoomOut"
          animationInTiming={900}
          animationOutTiming={900}
          onBackdropPress={() => setModalVisible(!modalVisible)}
          isVisible={modalVisible}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ModalAdd hideModal={setModalVisible} />
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
    flex: 1,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
  buttonAdd: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
  text: {
    letterSpacing: 10,
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
});
