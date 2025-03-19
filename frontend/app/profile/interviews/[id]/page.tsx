// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    return [{ slug: "test" }, { slug: "test" }];
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
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