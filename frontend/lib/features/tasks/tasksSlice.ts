import { Task } from '@/app/types/api/Api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react';

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter(task => task._id !== action.payload);
    },
    modifyTask: (state, action: PayloadAction<Task>) => {
      const task = state.tasks.find(task => task._id === action.payload?._id);
      if (task) {
        task.title = action.payload.title;
      }
    }
  },
  selectors: {
    selectAllTasks: (task) => task.tasks,
  },
  extraReducers: (builder) => {
    // manejar acciones asíncronas aquí si es necesario
  },
});

export const { setTasks, addTask, removeTask, modifyTask } = tasksSlice.actions;

export const { selectAllTasks } = tasksSlice.selectors;