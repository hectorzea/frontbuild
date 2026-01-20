import AddNewMatchModal from "@/components/frontbuild/Modal/AddNewMatchModal";

//esto es una ruta paralela o ParallelRoutePage
export default function AddNewMatchPage() {
  // console.log("Modal that is shown when the page is refreshed");
  return <AddNewMatchModal route={"/projects/hs-card-search/mulligan"} />;
}
