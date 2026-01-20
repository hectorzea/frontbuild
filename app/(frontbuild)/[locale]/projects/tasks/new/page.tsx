import AddNewTaskModal from "@/components/frontbuild/Modal/TaskModal";

//esto es una ruta paralela o ParallelRoutePage
export default function AddNewTaskPage() {
  // console.log("Modal that is shown when the page is refreshed");
  return <AddNewTaskModal route={"/projects/tasks"} />;
}
