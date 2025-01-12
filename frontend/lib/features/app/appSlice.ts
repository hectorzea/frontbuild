import { } from '@/app/types';
import { Label, Priority, Status, Task } from '@/app/types/api/Api';
import { } from '@/components/frontbuild/schema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AppState {
    labels: Label[] | undefined;
    statuses: Status[] | undefined;
    priorities: Priority[] | undefined;
    tasks: Task[] | undefined;
}

const initialState: AppState = {
    labels: [],
    statuses: [],
    priorities: [],
    tasks: []
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppData: (state, action: PayloadAction<AppState>) => {
            state.labels = action.payload.labels;
            state.statuses = action.payload.statuses;
            state.priorities = action.payload.priorities;
            state.tasks = action.payload.tasks;
        },
    },
    selectors: {
        selectLabels: (app) => app.labels,
        seletPriorities: (app) => app.priorities,
        selectStatuses: (app) => app.statuses,
        selectTasks: (app) => app.tasks
    },
    extraReducers: (builder) => {
        // manejar acciones asíncronas aquí si es necesario
    },
});

export const { setAppData } = appSlice.actions;

export const { selectLabels, seletPriorities, selectStatuses, selectTasks } = appSlice.selectors;