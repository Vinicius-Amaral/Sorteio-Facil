import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [
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
  ],
  reducers: {
    createUser(state, action) {
      state.push(action.payload);
    },
    updateUser(state, action) {},
    deleteUser(state, action) {
      const index = action.payload;
      state.splice(index, 1);
    },
  },
});

// Extract the action creators object and the reducer
const {actions, reducer} = userSlice;
// Extract and export each action creator by name
export const {createUser, updateUser, deleteUser} = actions;
// Export the reducer, either as a default or named export
export default reducer;
