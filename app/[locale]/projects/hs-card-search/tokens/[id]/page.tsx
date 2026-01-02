import TokenDashboard from "@/components/frontbuild/Token/TokenDashboard";

export default async function CardTokensPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <TokenDashboard cardId={id} />;
}
