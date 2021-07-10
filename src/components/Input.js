import React from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Colors from '../settings/Colors';

const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Maria, João, Carla, Samuel, Julia, ..."
        placeholderTextColor={Colors.white}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 50,
    borderRadius: 20,
    marginVertical: 16,
    flexDirection: 'row',
    backgroundColor: Colors.blue,
    justifyContent: 'space-evenly',
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: Colors.white,
    paddingHorizontal: 16,
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Regular',
  },
  button: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.green,
  },
  text: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
  },
});
