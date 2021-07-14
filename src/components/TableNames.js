import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {createUser, updateUser, deleteUser} from '../redux/slices/userSlice';

import Colors from '../settings/Colors';
import IconTrash from '../assets/icons/trash.svg';
import IconPencil from '../assets/icons/pencil.svg';

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

const ViewName = ({index, name, atualizar, excluir}) => (
  <View style={index % 2 === 0 ? styles.viewImpar : styles.viewPar}>
    <Text style={index % 2 === 0 ? styles.textImpar : styles.textPar}>
      {name}
    </Text>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => atualizar(index)}>
        <IconPencil style={{marginRight: 24}} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => excluir(index)}>
        <IconTrash />
      </TouchableOpacity>
    </View>
  </View>
);

const TableNames = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const atualizar = index => dispatch(updateUser(index));
  const excluir = index => dispatch(deleteUser(index));

  const sortearNome = () => {
    console.warn('AGUARDE...');
    setTimeout(() => console.warn('SORTEADO!'), 2000);
  };

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={false}
        onRefresh={() => sortearNome()}
        data={users}
        renderItem={({item, index}) => (
          <ViewName
            index={index}
            name={item.name}
            atualizar={atualizar}
            excluir={excluir}
          />
        )}
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
  icon: {
    width: 30,
    height: 30,
    color: '#000',
  },
});
