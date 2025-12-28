import { http, HttpResponse } from "msw";
import {
  createTaskMockScenario,
  deleteTaskMockScenario,
  taskByIdMockResponseScenario,
  tasksMock as tasks,
} from "@/mocks/data/mockData";
import { Task } from "@/app/types/api/Api";

//request bodies
type TaskGeneralPayloadBody = Pick<
  Task,
  "title" | "status" | "label" | "priority"
>;
type AddTaskRequestBody = TaskGeneralPayloadBody;
type CreateTaskSuccessResponse = Task;
type UpdateTaskRequestBody = Task;
type PatchTaskSuccessResponse = Task;
type DeleteTaskSuccessResponse = { message: string; success: boolean };

//Todo generate GENERIC error message from coming backed any library / ui
export type TaskGenericErrorResponse = { message: string };

//params
interface TaskRequestParams {
  id: string;
}

export const editTaskMockId: string = tasks[0]._id;

export const taskHandlers = [
  http.get(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/tasks`,
    () => {
      return HttpResponse.json(tasks);
    }
  ),
  http.get(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/tasks/:id`,
    ({ params }) => {
      const { id } = params;
      const defaultId = id as string;
      const mockResponse = taskByIdMockResponseScenario[defaultId];
      return HttpResponse.json(mockResponse.response, {
        status: mockResponse.status,
      });
    }
  ),
  http.post<
    never,
    AddTaskRequestBody,
    CreateTaskSuccessResponse | TaskGenericErrorResponse
  >(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/tasks`,
    async ({ request }) => {
      const taskData = await request.json();
      const defaultTitle = taskData.title as string;
      let mockResponse;
      if (defaultTitle !== "error") {
        mockResponse = createTaskMockScenario["success"];
        return HttpResponse.json(taskData, {
          status: mockResponse.status,
        });
      } else {
        mockResponse = createTaskMockScenario["error"];
        return HttpResponse.json(taskData, {
          status: mockResponse.status,
        });
      }
    }
  ),
  http.patch<
    TaskRequestParams,
    UpdateTaskRequestBody,
    PatchTaskSuccessResponse | TaskGenericErrorResponse
  >(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/tasks/:id`,
    async ({ request, params }) => {
      const taskData = await request.json();
      const { id } = params;
      const defaultId = id as string;
      const mockResponse = taskByIdMockResponseScenario[defaultId];
      return HttpResponse.json(taskData, {
        status: mockResponse.status,
      });
    }
  ),
  http.delete<
    TaskRequestParams,
    DeleteTaskSuccessResponse | TaskGenericErrorResponse
  >(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/tasks/:id`,
    async ({ params }) => {
      const { id } = params;
      const defaultId = id as string;
      const mockResponse = deleteTaskMockScenario[defaultId];
      return HttpResponse.json(mockResponse.response, {
        status: mockResponse.status,
      });
    }
  ),
];
