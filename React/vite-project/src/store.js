  import { configureStore, createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return { payload: { id: nanoid(), text, completed: false } };
      }
    },
    toggleTodo(state, action) {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo(state, action) {
      return state.filter(t => t.id !== action.payload);  
    },
    editTodo(state, action) {
      const { id, text } = action.payload;
      const todo = state.find(t => t.id === id);
      if (todo) todo.text = text;
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

export default store;