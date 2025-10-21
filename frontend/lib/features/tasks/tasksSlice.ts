import { Task } from "@/app/types/api/Api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TasksState {
  tasks: Task[];
  task?: Task;
}

const initialState: TasksState = {
  tasks: [],
  task: undefined,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTask: (state, action: PayloadAction<Task>) => {
      state.task = action.payload;
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },
    modifyTask: (state, action: PayloadAction<Task>) => {
      const task = state.tasks.find((task) => task._id === action.payload?._id);
      if (task) {
        task.title = action.payload.title;
        task.label = action.payload.label;
        task.priority = action.payload.priority;
        task.status = action.payload.status;
      }
    },
  },
  selectors: {
    selectAllTasks: (tasksState) => tasksState.tasks,
    selectTask: (tasksState) => tasksState.task,
  },
  // extraReducers: (builder) => {
  //   // handle here async actions if necessary
  // },
});

export const { setTasks, setTask, addTask, removeTask, modifyTask } =
  tasksSlice.actions;

export const { selectAllTasks, selectTask } = tasksSlice.selectors;
