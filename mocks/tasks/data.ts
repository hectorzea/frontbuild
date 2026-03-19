import {
  LabelOptions,
  PriorityOptions,
  StatusOptions,
} from "@/app/(frontbuild)/types/api/Api";
import {
  CreateTaskMockScenarios,
  DeleteTaskMockScenarios,
  FindTaskByIdMockScenarios,
} from "./types";

export const tasksMock = [
  {
    _id: "67574211b5599f1ebce84868",
    title: "Do something with the tests",
    status: StatusOptions.Done,
    label: LabelOptions.Epic,
    priority: PriorityOptions.High,
  },
  {
    _id: "675743bc6331e0a65f16a42a",
    title: "Run backend in streams",
    status: StatusOptions.Done,
    label: LabelOptions.Epic,
    priority: PriorityOptions.High,
  },
  {
    _id: "6760816d7f14e013cb7a9656",
    title: "Render pipelines without a trace",
    status: StatusOptions.Done,
    label: LabelOptions.Epic,
    priority: PriorityOptions.High,
  },
];

export const createTaskMockScenario: CreateTaskMockScenarios = {
  success: {
    status: 200,
    response: tasksMock[0],
  },
  error: {
    status: 500,
    response: {
      message: "Error adding task",
    },
  },
};

export const taskByIdMockResponseScenario: FindTaskByIdMockScenarios = {
  "67574211b5599f1ebce84868": {
    status: 200,
    response: tasksMock[0],
  },
  "123123": {
    status: 404,
    response: {
      message: "Task not found",
    },
  },
  "675743bc6331e0a65f16a42m": {
    status: 404,
    response: {
      message: "Task not found",
    },
  },
};

export const deleteTaskMockScenario: DeleteTaskMockScenarios = {
  "67574211b5599f1ebce84868": {
    status: 200,
    response: { success: true, message: "Deleted" },
  },
  "675743bc6331e0a65f16a42m": {
    status: 500,
    response: {
      message: "Error deleting task",
    },
  },
};
