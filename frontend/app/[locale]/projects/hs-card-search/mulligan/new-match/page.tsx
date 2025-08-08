import AddNewMatchModal from "@/components/frontbuild/Modal/AddNewMatchModal";

export default function ParallelRoutePage() {
  console.log("Modal that is shown when the page is refreshed");
  return <AddNewMatchModal route={"/projects/hs-card-search/mulligan"} />;
}
