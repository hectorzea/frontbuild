import { DeleteTaskConfirmation } from "@/components/frontbuild/AlertConfirmation/DeleteTaskConfirmation";

export default async function DeleteTaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <DeleteTaskConfirmation id={id} />;
}
