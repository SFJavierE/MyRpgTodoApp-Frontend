import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/taskApi';

export const getTasks = createAsyncThunk(
  'tasks/getTasks',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createTask = createAsyncThunk(
  'tasks/createTask',
  async (newTask, { rejectWithValue }) => {
    try {
      const res = await api.post('/', newTask); // api.post usually handles JSON stringification
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, taskToUpdate }, { rejectWithValue }) => {
    try {
      const res = await api.put(`/${id}`, taskToUpdate);
      return res.data; // Return the updated task
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    value: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // getTasks lifecycle
      .addCase(getTasks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // createTask lifecycle
      .addCase(createTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // updateTask lifecycle
      .addCase(updateTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.value.findIndex(task => task._id === action.payload._id);
        if (index !== -1) {
          state.value[index] = action.payload;
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // deleteTask lifecycle
      .addCase(deleteTask.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = state.value.filter((task) => task._id !== action.payload);
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default taskSlice.reducer;