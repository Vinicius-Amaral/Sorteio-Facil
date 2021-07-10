import React from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Colors from '../settings/Colors';

const names = [
  {id: 1, name: 'João Alves'},
  {id: 2, name: 'Catarina Correa'},
  {id: 3, name: 'Anderson Sousa'},
  {id: 4, name: 'Julio Martins'},
  {id: 5, name: 'Ana Silva'},
  {id: 6, name: 'Pedro Mendonça'},
  {id: 7, name: 'Camila Paz'},
  {id: 8, name: 'Adriano Aguiar'},
  {id: 9, name: 'Elisangela Froes'},
  {id: 10, name: 'Rodrigo Santos'},
  {id: 11, name: 'Pamela Delgado'},
  {id: 12, name: 'Lucas Garces'},
  {id: 13, name: 'Priscila Fontenele'},
  {id: 14, name: 'Magno Menezes'},
  {id: 15, name: 'Juliana Gouveia'},
];

const ViewName = ({id, name}) => {
  return id % 2 === 1 ? (
    <View style={styles.viewImpar}>
      <Text style={styles.textImpar}>{name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.textImpar, {marginRight: 16}]}>Edit</Text>
        <Text style={styles.textImpar}>Delete</Text>
      </View>
    </View>
  ) : (
    <View style={styles.viewPar}>
      <Text style={styles.textPar}>{name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.textPar, {marginRight: 16}]}>Edit</Text>
        <Text style={styles.textPar}>Delete</Text>
      </View>
    </View>
  );
};

const TableNames = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={names}
        renderItem={({item}) => <ViewName id={item.id} name={item.name} />}
      />
    </View>
  );
};

export default TableNames;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  viewImpar: {
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#87B0C0',
    flexDirection: 'row',
    backgroundColor: '#A1C2CE',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  viewPar: {
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#87B0C0',
    flexDirection: 'row',
    backgroundColor: '#E4EEF1',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  textPar: {
    color: Colors.blue,
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
  },
  textImpar: {
    color: Colors.white,
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
  },
});
