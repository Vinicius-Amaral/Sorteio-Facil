import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {createUser} from '../redux/slices/userSlice';
import {useDispatch} from 'react-redux';

const Input = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={name => setName(name)}
        placeholder="Maria, João, Carla, Samuel, Julia, ..."
        placeholderTextColor="gray"
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          onPress={() => dispatch(createUser(name))}
          style={styles.button}>
          <Text style={styles.text}>ADICIONAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text}>ORDENAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.text}>SORTEAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  input: {
    fontSize: 18,
    color: '#000',
    borderBottomWidth: 2,
    paddingHorizontal: 16,
    borderBottomColor: 'gray',
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Regular',
  },
  button: {
    height: 40,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'gray',
    fontFamily: 'Roboto-Bold',
  },
});
