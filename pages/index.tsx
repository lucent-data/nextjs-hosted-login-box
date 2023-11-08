import { useAuth } from "@frontegg/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MyPage({ products }) {
  const { user } = useAuth();

  const router = useRouter();

  return (
    <div>
      <h1>My Page</h1>
      {products}
      <div>
        <img src={user?.profilePictureUrl} alt={user?.name} />
      </div>
      <div>
        <span>Logged in as: {user?.name}</span>
      </div>
      <div>
        <button onClick={() => router.push("/test")}>
          Navigate with router push
        </button>
        <Link href="/test">Navigate with link</Link>
      </div>
    </div>
  );
}
