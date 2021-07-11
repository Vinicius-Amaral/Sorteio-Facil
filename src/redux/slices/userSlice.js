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
    order(state) {
      const names = [];
      state.forEach(p => names.push(p.name));
      names.sort();
      state.forEach((p, index) => (p.name = names[index]));
    },
  },
});

const {actions, reducer} = userSlice;
export const {createUser, updateUser, deleteUser, deleteAll, order} = actions;
export default reducer;
