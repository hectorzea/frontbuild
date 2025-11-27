import reducer, {
  addTask,
  modifyTask,
  removeTask,
  setTask,
  setTasks,
  TasksState,
} from "./tasksSlice";
import { tasksMock } from "@/mocks/data/mockData";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: "unknown" })).toEqual({
    tasks: [],
    task: undefined,
  });
});

test("should set task info", () => {
  const previousState: TasksState = {
    task: undefined,
    tasks: [],
  };

  expect(reducer(previousState, setTask(tasksMock[0]))).toEqual({
    task: tasksMock[0],
    tasks: [],
  });
});

test("should set tasks", () => {
  const previousState: TasksState = {
    task: undefined,
    tasks: [],
  };

  expect(reducer(previousState, setTasks(tasksMock))).toEqual({
    task: undefined,
    tasks: tasksMock,
  });
});

test("should add task to tasks state", () => {
  const previousState: TasksState = {
    task: undefined,
    tasks: [],
  };

  expect(reducer(previousState, addTask(tasksMock[0]))).toEqual({
    task: undefined,
    tasks: [tasksMock[0]],
  });
});

test("should remove task from tasks state", () => {
  const previousState: TasksState = {
    task: undefined,
    tasks: [tasksMock[0]],
  };

  expect(reducer(previousState, removeTask(tasksMock[0]._id))).toEqual({
    task: undefined,
    tasks: [],
  });
});

test("should modify task from tasks state", () => {
  const previousState: TasksState = {
    task: undefined,
    tasks: [tasksMock[0]],
  };

  const taskId = tasksMock[0]._id;

  const updateTaskPayload = {
    _id: taskId,
    title: "hola",
    status: "todo",
    priority: "high",
    label: "tech-debt",
  };

  expect(reducer(previousState, modifyTask(updateTaskPayload))).toEqual({
    task: undefined,
    tasks: [updateTaskPayload],
  });
});
