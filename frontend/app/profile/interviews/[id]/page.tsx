export async function generateStaticParams() {
    return [{ slug: "test" }, { slug: "test" }];
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    console.log(slug)
    return <div>{slug}</div>
    // ...
}