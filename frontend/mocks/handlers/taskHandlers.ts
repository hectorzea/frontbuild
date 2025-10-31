import { http, HttpResponse } from "msw";
import { generateMockObjectId } from "@/lib/utils";
import { Task, TaskSuccessResponseSchema } from "@/app/types/api/Api";
import {
  taskByIdMockResponseScenario,
  tasksMock as tasks,
} from "@/mocks/data/mockData";

//request bodies
type TaskGeneralPayloadBody = Pick<
  Task,
  "title" | "status" | "label" | "priority"
>;
type AddTaskRequestBody = TaskGeneralPayloadBody;
type UpdateTaskRequestBody = Task;
type PatchTaskSuccessResponse = Task;
type DeleteTaskSuccessResponse = null;

//Todo generate GENERIC error message from coming backed any library / ui
export type TaskGenericErrorResponse = { message: string };

//params
interface TaskRequestParams {
  id: string;
}

export const editTaskMockId: string = tasks[0]._id;

//todo update handlers new api
export const taskHandlers = [
  ////todo finish like patch
  http.get(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/tasks`,
    () => {
      return HttpResponse.json(tasks);
    }
  ),
  ////todo finish like patch
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
  ////todo finish like patch
  http.post<AddTaskRequestBody, TaskSuccessResponseSchema>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/tasks`,
    async ({ request }) => {
      const taskData = await request.json();
      return HttpResponse.json(
        { ...taskData, _id: generateMockObjectId() },
        {
          status: 200,
        }
      );
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
  ////todo finish like patch
  http.delete<TaskRequestParams, DeleteTaskSuccessResponse>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/tasks/:id`,
    async ({}) => {
      return new HttpResponse(null, {
        status: 204,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  ),
];
