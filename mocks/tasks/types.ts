import { Task } from "@/app/(frontbuild)/schemas";

export type FindTaskByIdMockScenarios = Record<string, MockScenarioFindById>;
type MockScenarioFindById = SuccessResponseFindById | ErrorResponseFindById;

export type CreateTaskMockScenarios = Record<string, MockScenarioCreateTask>;
type MockScenarioCreateTask =
  | SuccessResponseCreateTask
  | ErrorResponseCreateTask;

type SuccessResponseCreateTask = {
  status: 200;
  response: Task;
};
type ErrorResponseCreateTask = {
  status: 500 | 404;
  response: {
    message: string;
  };
};

type SuccessResponseFindById = {
  status: 200;
  response: Task;
};
type ErrorResponseFindById = {
  status: 500 | 404;
  response: {
    message: string;
  };
};

type SuccessResponseDelete = {
  status: 200;
  response: { success: boolean; message: string };
};
type ErrorResponseDelete = {
  status: 500 | 404;
  response: {
    message: string;
  };
};

export type DeleteTaskMockScenarios = Record<string, MockScenarioDeleteTask>;
type MockScenarioDeleteTask = SuccessResponseDelete | ErrorResponseDelete;
