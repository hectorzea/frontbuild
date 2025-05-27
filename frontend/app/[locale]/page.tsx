import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center space-y-6 mx-4">
            <p>Frontbuild is a repository which contains my personal projects and an overview of my career as developer.</p>
            <Link href={`/profile`} className="text-blue-500 hover:underline">Go to my profile</Link>
        </div>
    );
}