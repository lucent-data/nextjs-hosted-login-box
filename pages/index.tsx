import { useAuth } from "@frontegg/nextjs";
import { withSSRSession } from "@frontegg/nextjs/pages";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MyPage({ products }) {
  const { user } = useAuth();
  const router = useRouter();

  const logout = () => {
    router.replace("/account/logout");
  };

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

export const getServerSideProps: GetServerSideProps = withSSRSession(
  async (context, session) => {
    console.log(session);
    return { props: {} };
  }
);
