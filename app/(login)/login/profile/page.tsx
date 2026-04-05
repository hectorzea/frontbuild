import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      PROFILE NOT ADMIN BUT LOGGED REQUIRED
      <Link href={`/login`}>Login</Link>
    </div>
  );
}
