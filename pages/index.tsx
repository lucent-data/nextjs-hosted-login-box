import Link from "next/link";
import { useAuth } from "../hooks/use-auth";

export default function MyPage({ products }) {
  const { user, logout } = useAuth();

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
        <button onClick={logout}>Log out</button>
      </div>
      <div>
        <Link href="/test">Navigate to test Page</Link>
      </div>
    </div>
  );
}
