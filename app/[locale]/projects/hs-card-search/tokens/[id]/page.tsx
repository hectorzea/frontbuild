import TokenDashboard from "@/components/frontbuild/Token/TokenDashboard";

export default async function CardTokensPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  //   const cardId = await getPost(slug);
  // console.log(id);

  return <TokenDashboard cardId={id} />;
}
