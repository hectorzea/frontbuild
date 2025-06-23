import { http, HttpResponse } from "msw";
import { Task, TaskSuccessResponseSchema } from "../types/api/Api";
import { generateMockObjectId } from "@/lib/utils";

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

export const tasks = [
  {
    _id: "67574211b5599f1ebce84868",
    title: "Do something with the tests",
    status: "done",
    label: "epic",
    priority: "high",
  },
  {
    _id: "675743bc6331e0a65f16a42a",
    title: "Run backend in streams",
    status: "done",
    label: "epic",
    priority: "high",
  },
  {
    _id: "6760816d7f14e013cb7a9656",
    title: "Render pipelines without a trace",
    status: "backlog",
    label: "feature",
    priority: "low",
  },
];

export const taskHandlers = [
  http.get(`${process.env.NEXT_PUBLIC_FRONTBUILD_API_URL}/api/tasks`, () => {
    return HttpResponse.json(tasks);
  }),
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
