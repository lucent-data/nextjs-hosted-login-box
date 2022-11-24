import { GetServerSideProps } from 'next';
import { withSSRSession, useAuth } from '@frontegg/nextjs';

export default function MyPage({ products }) {
  const {user} = useAuth();
  
  //baseUrl should be your FRONTEGG_APP_URL from .env.local
  const baseUrl =  'FRONTEGG_APP_URL'
  
  const logout = () => {
    window.location.href = `${baseUrl}/account/logout`;
  };

  return (
    <div>
      <h1>My Page</h1>
       {products}
      <div>
        <img src={user?.profilePictureUrl} alt={user?.name}/>
      </div>
      <div>
        <span>Logged in as: {user?.name}</span>
      </div>
            <div>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRSession(
  async (context, session) => {
//     const { data } = await fetch('{external}/product', {
//      headers: {
//        Authorization: 'bearer ' + session.accessToken,
//      },
//    });
    console.log(session)
    return { props: { } };
  }
);