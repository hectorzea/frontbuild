import { addTaskApi, updateTaskApi } from "@/lib/features/tasks/api";

describe("MSW Handlers", () => {
  it("POST add task response tests", async () => {
    const taskData = {
      title: "Test Task",
      status: "to-do",
      label: "bug",
      priority: "high",
    };

    const result = await addTaskApi(taskData);

    expect(result).toEqual({ ...taskData, _id: expect.any(String) });
  });

  it("PUT update task response tests", async () => {
    const taskData = {
      _id: "existing-task-id",
      title: "Test Task",
      status: "to-do",
      label: "bug",
      priority: "high",
    };

    const result = await updateTaskApi(taskData);

    expect(result).toEqual(taskData);
  });

  it("DELETE task response tests", async () => {
    const apiUrl = process.env.NEXT_PUBLIC_FRONTBUILD_API_URL;
    const taskId = "test-task-id";

    const deleteTask = async (id: string) => {
      const response = await fetch(`${apiUrl}/api/tasks/${id}`, {
        method: "DELETE",
      });
      return response;
    };

    const response = await deleteTask(taskId);

    expect(response.status).toBe(204);

    expect(response.headers.get("content-type")).toBe("application/json");
  });
});
