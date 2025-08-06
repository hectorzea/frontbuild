import AddNewMatchModal from "@/components/frontbuild/Modal/AddNewMatchModal";

export default function ParallelRoutePage() {
  console.log("I am the modal that is shown when the page is refreshed");
  return <AddNewMatchModal route={"/projects/hs-card-search/mulligan"} />;
}
