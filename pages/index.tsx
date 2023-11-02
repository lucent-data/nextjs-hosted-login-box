import { useAuth } from "@frontegg/nextjs";
import Link from "next/link";

export default function MyPage({ products }) {
  const { user } = useAuth();

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
        <Link href="/test">Navigate to test Page</Link>
      </div>
    </div>
  );
}
