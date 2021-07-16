import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Colors from '../settings/Colors';
import {createUser} from '../redux/slices/userSlice';
import {useDispatch} from 'react-redux';

const Input = ({hideModal}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

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
          onPress={() =>
            name.length > 0
              ? dispatch(createUser(name)) && hideModal(false)
              : false
          }
          style={styles.button}>
          <Text style={styles.text}>ADICIONAR</Text>
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
    width: '100%',
    marginVertical: 8,
    paddingVertical: 10,
    backgroundColor: Colors.green,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Roboto-Bold',
  },
});
