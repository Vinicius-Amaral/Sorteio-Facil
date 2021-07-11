import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [
    {id: 1, name: 'João Alves'},
    {id: 2, name: 'Catarina Correa'},
    {id: 3, name: 'Anderson Sousa'},
  ],
  reducers: {
    createUser(state, action) {
      const names = action.payload;
      const namesSplit = names.split(',');
      namesSplit.forEach(name => {
        let index = state.length;
        const nameTrim = name.trim();
        state.push({id: ++index, name: nameTrim});
      });
    },
    updateUser(state, action) {},
    deleteUser(state, action) {
      const index = action.payload;
      state.splice(index, 1);
    },
    deleteAll(state) {
      for (i = 0; i <= state.length + 1; i++) state.pop();
    },
  },
});

// Extract the action creators object and the reducer
const {actions, reducer} = userSlice;
// Extract and export each action creator by name
export const {createUser, updateUser, deleteUser, deleteAll} = actions;
// Export the reducer, either as a default or named export
export default reducer;
