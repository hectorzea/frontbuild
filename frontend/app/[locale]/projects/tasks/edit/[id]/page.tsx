import AddNewTaskModal from "@/components/frontbuild/Modal/TaskModal";

export default async function EditTaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <AddNewTaskModal route={"/projects/tasks"} id={id} />;
}
