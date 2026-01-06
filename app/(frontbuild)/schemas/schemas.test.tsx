import { taskSchema } from "@/app/(frontbuild)/schemas";

test("Test schema with all valid data ", async () => {
  expect(() =>
    taskSchema.parse({
      title: "do something",
      status: "todo",
      label: "epic",
      priority: "low",
    })
  ).not.toThrow();
});

test("Test schema with invalid statuses", async () => {
  expect(() => taskSchema.parse({ title: "" })).toThrow("Title is required");
  expect(() =>
    taskSchema.parse({
      title: "do something",
      status: "todos-s",
      label: "something",
      priority: "low",
    })
  ).toThrow("Invalid status");
  expect(() =>
    taskSchema.parse({
      title: "do something",
      status: "todo",
      label: "something",
      priority: "low",
    })
  ).toThrow("Invalid label");
  expect(() =>
    taskSchema.parse({
      title: "do something",
      status: "todo",
      label: "epic",
      priority: "standar",
    })
  ).toThrow("Invalid priority");
});
