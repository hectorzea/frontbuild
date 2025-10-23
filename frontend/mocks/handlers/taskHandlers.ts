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
type DeleteTaskSuccessResponse = null;

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
  http.post<AddTaskRequestBody, TaskSuccessResponseSchema>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/tasks/add`,
    async ({ request }) => {
      const taskData = await request.json();
      return HttpResponse.json({
        message: "Task added successfully",
        task: { ...taskData, _id: generateMockObjectId() },
      });
    }
  ),
  http.put<TaskRequestParams, UpdateTaskRequestBody, TaskSuccessResponseSchema>(
    `${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/tasks/:id`,
    async ({ request, params }) => {
      const { id } = params;
      const taskData = await request.json();
      return HttpResponse.json({
        message: "Task modified successfully",
        task: { ...taskData, _id: id },
      });
    }
  ),
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
