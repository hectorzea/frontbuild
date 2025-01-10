import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

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
  },
  selectors: {
    selectAllTasks: (task) => task.tasks,
  },
  extraReducers: (builder) => {
    // manejar acciones asíncronas aquí si es necesario
  },
});

export const { setTasks } = tasksSlice.actions;

export const { selectAllTasks } = tasksSlice.selectors;