export default async function CardTokensPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  //   const cardId = await getPost(slug);
  console.log(id);

  return <div>Tokens: {id}</div>;
}
